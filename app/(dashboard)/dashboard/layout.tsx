import DashWrapper from "./Components/DashWrapper";


type DashLayoutProps = {
  children: React.ReactNode;
};

export default async function DashboardLayout({ children }: DashLayoutProps) {
  return <DashWrapper>{children}</DashWrapper>;
}
