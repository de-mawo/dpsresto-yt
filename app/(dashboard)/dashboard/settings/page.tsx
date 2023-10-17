import Container from "@/app/components/Common/Container";
import RestaurantDetails from "./RestaurantDetails";
import OpeningHoursForm from "./OpeningHours";
import AdminCategories from "./AdminCategories";


const AdminSettings = () => {
  return (
    <Container>
      <div className="  rounded-lg shadow-2xl p-6 my-12 max-h-[80vh] overflow-y-auto bg-white">
        <div className="text-center  p-6 text-2xl font-semibold text-slate-500 ">
          Admin Settings
        </div>
        <RestaurantDetails /> 
        <OpeningHoursForm />
        <AdminCategories/> 
      </div>
    </Container>
  );
};

export default AdminSettings;