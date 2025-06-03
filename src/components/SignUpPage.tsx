"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  full_name: z.string().min(2, "Full name is required"),
  role: z.enum(["admin", "tenant", "client"]).default("admin"),
});
type SignUpFormData = {
  email: string;
  password: string;
  full_name: string;
  role: "admin" | "tenant" | "client";
};

const SignUpPage = () => {
  const router = useRouter();
  const supabase = createClient();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(signUpSchema as any),
  });

  const onSubmit = async (data: SignUpFormData) => {
    setError(null);
    setLoading(true);
    console.log(data);
    // Sign up user with Supabase
    const { data: signUpData, error: signUpError } = await supabase.auth.signUp(
      {
        email: data.email,
        password: data.password,
      }
    );
    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }
    // Insert profile row
    const user = signUpData.user;
    if (user) {
      const { error: profileError } = await supabase.from("profiles").insert({
        id: user.id,
        full_name: data.full_name,
        role: data.role,
      });
      if (profileError) {
        setError(profileError.message);
        setLoading(false);
        return;
      }
    }
    setLoading(false);
    router.replace("/");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-background">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {error && (
          <div className="mb-4 text-red-600 text-sm text-center font-medium bg-red-50 border border-red-200 rounded p-2">
            {error}
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="mail@domain.com"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <span className="text-xs text-red-500 mt-1 block">
                {errors.email.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium mb-1"
            >
              Password
            </label>
            <Input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder="Your password"
              {...register("password")}
              aria-invalid={!!errors.password}
            />
            {errors.password && (
              <span className="text-xs text-red-500 mt-1 block">
                {errors.password.message}
              </span>
            )}
          </div>
          <div>
            <label
              htmlFor="full_name"
              className="block text-sm font-medium mb-1"
            >
              Full Name
            </label>
            <Input
              id="full_name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              {...register("full_name")}
              aria-invalid={!!errors.full_name}
            />
            {errors.full_name && (
              <span className="text-xs text-red-500 mt-1 block">
                {errors.full_name.message}
              </span>
            )}
          </div>
          <input type="hidden" value="admin" {...register("role")} />
          <Button
            type="submit"
            className="w-full rounded-md"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </Button>
        </form>
        <div className="flex justify-between mt-4 text-sm">
          <a href="/signin" className="text-blue-600 hover:underline">
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
