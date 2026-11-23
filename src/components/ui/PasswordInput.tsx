"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type Props = {
  name?: string;
  id?: string;
  required?: boolean;
  minLength?: number;
  placeholder?: string;
  autoComplete?: string;
  className?: string;
};

export default function PasswordInput({
  name = "password",
  id,
  required,
  minLength,
  placeholder,
  autoComplete = "current-password",
  className = "input pr-11",
}: Props) {
  const [show, setShow] = useState(false);

  return (
    <div className="relative">
      <input
        id={id}
        name={name}
        type={show ? "text" : "password"}
        className={className}
        required={required}
        minLength={minLength}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      <button
        type="button"
        className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100 hover:text-primary"
        onClick={() => setShow((v) => !v)}
        aria-label={show ? "Hide password" : "Show password"}
      >
        {show ? (
          <EyeOff className="h-4 w-4" strokeWidth={1.75} aria-hidden />
        ) : (
          <Eye className="h-4 w-4" strokeWidth={1.75} aria-hidden />
        )}
      </button>
    </div>
  );
}
