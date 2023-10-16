import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";
import { GiHelp } from "react-icons/gi";
import LanguageSelectModal from "./LanguageSelectModal";


const UserPrefs = () => {
  return (
    <div className="flex flex-col mt-3 space-y-4">
      <div className="p-2 bg-slate-100">
        <h2 className="text-gray-500  font-medium">PREFERENCES</h2>
      </div>
      <div className="flex items-center justify-between p-2 text-gray-500">
        <div className="flex items-center">
          <FiGlobe size={28} className="mr-3" />
          <h3 className="text-lg font-medium">Language</h3>
        </div>
        <LanguageSelectModal/>
      </div>
      <Link
        href="/user/help"
        className="flex items-center justify-between p-2 text-gray-500"
      >
        <div className="flex items-center">
          <GiHelp size={28} className="mr-3" />
          <h3 className="text-lg font-medium">Help</h3>
        </div>

        <FaChevronRight className="shrink-0" />
      </Link>
    </div>
  );
};

export default UserPrefs;