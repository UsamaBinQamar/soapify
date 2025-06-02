/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { useState } from "react";

// Zod schema for forgot password form
const forgotPasswordSchema = z.object({
  email: z.string().email("Invalid email address"),
});
type ForgotPasswordFormData = z.infer<typeof forgotPasswordSchema>;

export default function ForgotPasswordPage() {
  const supabase = createClientComponentClient();
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormData>({
    resolver: zodResolver(forgotPasswordSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: ForgotPasswordFormData) => {
    setError(null);
    setSuccess(null);
    try {
      const { error: supabaseError } =
        await supabase.auth.resetPasswordForEmail(data.email, {
          redirectTo: `${window.location.origin}/reset-password`,
        });
      if (supabaseError) {
        setError(supabaseError.message);
        return;
      }
      setSuccess("Password reset email sent! Please check your inbox.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-18">
      <div
        className="w-full max-w-[384px] py-[24px] pt-0 px-[12px] relative"
        style={{ zIndex: 1 }}
      >
        <div
          className="flex flex-col justify-center gap-[40px] max-sm:gap-[12px]"
          style={{ color: "var(--text-primary)" }}
        >
          <div>
            {error && (
              <div className="mb-4 text-red-600 text-sm text-center font-medium bg-red-50 border border-red-200 rounded p-2">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 text-green-600 text-sm text-center font-medium bg-green-50 border border-green-200 rounded p-2">
                {success}
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col items-start mb-8">
                <div className="w-full flex items-center justify-between gap-[12px] mb-[10px]">
                  <label
                    htmlFor="email"
                    className="text-[13px] font-medium"
                    style={{ color: "var(--text-primary)" }}
                  >
                    <span>Email</span>
                    <span style={{ color: "var(--function-error)" }}>*</span>
                  </label>
                </div>
                <Input
                  id="email"
                  {...register("email")}
                  type="email"
                  placeholder="mail@domain.com"
                  className="w-full h-[40px] rounded-[8px] border text-[14px] px-3 bg-white "
                />
                {errors.email && (
                  <span className="text-xs text-red-500 mt-1">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <Button
                className="w-full rounded-[10px] mb-8"
                style={{
                  opacity: !errors.email && !isSubmitting ? 1 : 0.5,
                  cursor:
                    !errors.email && !isSubmitting ? "pointer" : "not-allowed",
                }}
                disabled={!!errors.email || isSubmitting}
                type="submit"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <span>Send reset link</span>
                )}
              </Button>
              <div className="flex justify-center text-sm mt-2">
                <Link
                  href="/signin"
                  className="text-[#0d2418] hover:underline font-medium"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Back to sign in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
