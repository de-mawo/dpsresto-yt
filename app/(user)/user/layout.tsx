import Header from "@/app/components/Common/Header";
import SideBar from "@/app/components/Common/SideBar";


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <div>
      <Header  />
      <SideBar  />
      {children}
    </div>
  );
}