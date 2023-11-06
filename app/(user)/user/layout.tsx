import Header from "@/app/components/Common/Header";
import SideBar from "@/app/components/Common/SideBar";
import { getCurrentUser } from "@/lib/session";
import { User } from "@prisma/client";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();
  return (
    <div>
      <Header  user={user as User} />
      <SideBar user={user as User}   />
      {children}
    </div>
  );
}