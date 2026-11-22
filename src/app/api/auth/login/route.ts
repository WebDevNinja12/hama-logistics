import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { setSessionCookie, signToken, verifyPassword } from "@/lib/auth";

const schema = z.object({
  identifier: z.string().min(1),
  password: z.string().min(1),
});

export async function POST(req: NextRequest) {
  try {
    const body = schema.parse(await req.json());
    const id = body.identifier.trim();
    const user = await prisma.user.findFirst({
      where: {
        OR: [{ email: id }, { phone: id }],
        isActive: true,
      },
    });
    if (!user || !(await verifyPassword(body.password, user.passwordHash))) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
    const token = signToken({
      sub: user.id,
      email: user.email,
      phone: user.phone,
      role: user.role,
      name: `${user.firstName} ${user.lastName}`,
    });
    await setSessionCookie(token);
    return NextResponse.json({
      user: {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        role: user.role,
      },
    });
  } catch (e) {
    if (e instanceof z.ZodError) {
      return NextResponse.json({ error: e.errors[0]?.message || "Invalid input" }, { status: 400 });
    }
    console.error(e);
    return NextResponse.json({ error: "Login failed" }, { status: 500 });
  }
}
