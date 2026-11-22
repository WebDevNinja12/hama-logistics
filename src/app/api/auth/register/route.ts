import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { hashPassword, setSessionCookie, signToken } from "@/lib/auth";

const schema = z
  .object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email().optional().or(z.literal("")),
    phone: z.string().min(10).optional().or(z.literal("")),
    password: z.string().min(6),
  })
  .refine((d) => d.email || d.phone, { message: "Email or phone is required" });

export async function POST(req: NextRequest) {
  try {
    const data = schema.parse(await req.json());
    if (data.email) {
      const exists = await prisma.user.findUnique({ where: { email: data.email } });
      if (exists) return NextResponse.json({ error: "Email already registered" }, { status: 409 });
    }
    if (data.phone) {
      const exists = await prisma.user.findUnique({ where: { phone: data.phone } });
      if (exists) return NextResponse.json({ error: "Phone already registered" }, { status: 409 });
    }
    const passwordHash = await hashPassword(data.password);
    const user = await prisma.user.create({
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email || null,
        phone: data.phone || null,
        passwordHash,
        wallet: { create: { balance: 0, currency: "NGN" } },
      },
    });
    const token = signToken({
      sub: user.id,
      email: user.email,
      phone: user.phone,
      role: user.role,
      name: `${user.firstName} ${user.lastName}`,
    });
    await setSessionCookie(token);
    return NextResponse.json(
      {
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phone: user.phone,
          role: user.role,
        },
      },
      { status: 201 }
    );
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.errors[0]?.message || "Invalid input" }, { status: 400 });
    }
    console.error(e);
    return NextResponse.json({ error: "Registration failed" }, { status: 500 });
  }
}
