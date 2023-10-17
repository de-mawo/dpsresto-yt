import Container from "@/app/components/Common/Container";
import TotalCards from "./Components/TotalCards";
import SalesRevenueGraph from "./Components/SalesRevenueGraph";

const AdminDashboard = () => {
  return (
    <Container>
      <TotalCards />
      <section className="py-6 grid grid-cols-1  md:grid-cols-2  gap-4 ">
        <SalesRevenueGraph />
      </section>
    </Container>
  );
};

export default AdminDashboard;
