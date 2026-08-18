"use server";

import { cookies } from "next/headers";
import { AuthService } from "@/shared/api/AuthService";
import { redirect } from "next/navigation";

interface ActionsReturnType {
  message?: string;
  success?: false;
}

export async function LoginAction(
  state: ActionsReturnType,
  formData: FormData,
): Promise<ActionsReturnType> {
  const login = formData.get("login")?.toString().trim();
  const password = formData.get("password")?.toString().trim();
  if (!login || !password) {
    return { success: false, message: "Uncorrect Data" };
  }

  try {
    const { accessToken } = await AuthService.login({ login, password });

    const cookieStore = await cookies();
    cookieStore.set("access_token", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7,
    });
  } catch (e: any) {
    if (e.status >= 500) {
      return { success: false, message: "Server Error" };
    } else if (e.status < 500) {
      return { success: false, message: "Uncorrect Data" };
    } else if (e.message === "Network Error") {
      return { success: false, message: "Network Error" };
    }

    console.error(JSON.stringify(e, null, 2));
    return { success: false, message: `Unknown Error: ${e.message}` };
  }

  redirect("/admin", "replace");
}
