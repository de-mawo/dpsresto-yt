import { HiArrowRightOnRectangle, HiChevronDoubleLeft } from "react-icons/hi2";
import RenderRoutes from "./RenderRoutes";
import { AdminRoutes } from "./routes";

type Props = {
  show: boolean;
  showSideBar: () => void;
};

const DashSideBar = ({ show, showSideBar }: Props) => {
  const adminRouter = () => {
    return <>{RenderRoutes({ routes: AdminRoutes, show })}</>;
  };

  return (
    <aside
      className={`py-4 px-2 fixed inset-y-0 left-0 bg-white transition-all duration-1000 ease-out shadow-md w-[5rem]  ${
        show && "md:w-40 "
      }`}
    >
      <HiChevronDoubleLeft
        className={`bg-green-600  hidden md:block
       rounded-full text-white shadow-lg
       absolute -right-3 top-9 z-10 cursor-pointer 
        ${!show && "rotate-180"}`}
        size={32}
        onClick={showSideBar}
      />
      <nav className="flex flex-col items-center justify-between h-full   ">
        <div
          className={`overflow-y-auto pt-20 w-16 scrollbar-hide ${
            show && "md:w-[10rem]"
          } `}
        >
          <div
            className={`flex flex-col items-center space-y-6 ${
              show && "md:items-start"
            } `}
          >
            {adminRouter()}
          </div>
        </div>

        <div className="pt-6 mb-8 bg-white  border-t">
          <div className="flex items-center   cursor-pointer pb-3 md:justify-start group ">
            <div className="relative ">
              <span
                className={`absolute bg-green-600
                 text-white text-[0.7rem] p-1 
                 rounded-md -top-6 left-[0.8rem]  transform -translate-x-1/2 invisible ${
                   show && "md:hidden"
                 } group-hover:visible md:left-[1.6rem]`}
              >
                Logout
              </span>
              <HiArrowRightOnRectangle
                className="text-slate-500 mr-2"
                size={24}
              />
            </div>

            <span className={`hidden ${show && "md:inline"}`}>Logout</span>
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default DashSideBar;
