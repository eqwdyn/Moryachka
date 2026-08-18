import { AdminPageVM } from "@/app/admin/page.vm";
import { CreateCategoryModal } from "@/app/admin/components/CreateCategoryModal";
import { CreateDishModal } from "@/app/admin/components/CreateDishModal";
import { RedactDishModal } from "@/app/admin/components/RedactDishModal";
import { AuthService } from "@/shared/api/AuthService";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

// export const dynamic = "force-dynamic";

export default async function Admin() {
  const cookieStore = await cookies();
  const token = cookieStore.get("access_token")?.value;

  if (!token) {
    console.log("Not token");
    redirect("/", "replace");
  }

  const isAdmin = await AuthService.checkAuth(token);
  if (!isAdmin) {
    console.log("Not admin");
    redirect("/", "replace");
  }

  return (
    <>
      <AdminPageVM token={token} />
      <CreateCategoryModal token={token} />
      <CreateDishModal token={token} />
      <RedactDishModal token={token} />
    </>
  );
}
