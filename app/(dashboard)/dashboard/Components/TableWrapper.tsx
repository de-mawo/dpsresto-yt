
import SearchAndFilter from "./SearchAndFilter";

type TableProps = {
  title: string;
  children: React.ReactNode;
};

const TableWrapper = ({ title, children }: TableProps) => {
  return (
    <div className="rounded-lg shadow-2xl p-6 my-12 max-h-[80vh] overflow-y-auto bg-white">
      <div>
        <h2 className="text-center  mb-6 text-2xl font-semibold text-slate-500">
          {title}
        </h2>
        <SearchAndFilter />
      </div>

      <div className="relative overflow-x-auto  ">{children}</div>
    </div>
  );
};

export default TableWrapper;