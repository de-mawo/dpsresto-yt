import { getCurrentUser } from "@/lib/session";
import DashWrapper from "./Components/DashWrapper";
import { User } from "@prisma/client";


type DashLayoutProps = {
  children: React.ReactNode;
};


export default async function DashboardLayout({ children }: DashLayoutProps) {
  const user = await getCurrentUser()
  return <DashWrapper user={user as User}>{children}</DashWrapper>;
}
