import { AdminPageVM } from "@/pages/Admin/AdminPage.vm";
import { CreateCategoryModal } from "@/pages/Admin/components/CreateCategoryModal";
import { CreateDishModal } from "@/pages/Admin/components/CreateDishModal";
import { RedactDishModal } from "@/pages/Admin/components/RedactDishModal";
import { AuthService } from "@/shared/api/AuthService";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const AdminPage = async () => {
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
};
