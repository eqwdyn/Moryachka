"use server";

import { cookies } from "next/headers";
import { AuthService } from "@/shared/api/AuthService";
import { redirect } from "next/navigation";

export async function loginAction(data: { login: string; password: string }) {
  const { accessToken } = await AuthService.login(data);

  const cookieStore = await cookies();
  cookieStore.set("access_token", accessToken, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
  });

  redirect("/admin", "replace");
}
