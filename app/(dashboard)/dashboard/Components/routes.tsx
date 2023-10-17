
import {  AiOutlineDashboard, AiOutlineMessage } from "react-icons/ai";

import {
  HiOutlineUserGroup,
  HiOutlineHome,
  HiOutlineTruck,
  HiOutlineCog6Tooth,
} from "react-icons/hi2";

import { CiReceipt } from "react-icons/ci";
import {  VscLayoutMenubar } from "react-icons/vsc";

export const AdminRoutes = [
    { title: "Home", icon: HiOutlineHome, url: "/" },
    { title: "Dashboard", icon: AiOutlineDashboard, url: "/dashboard" },
    { title: "Users", icon: HiOutlineUserGroup, url: "/dashboard/users" },
    { title: "Orders", icon: CiReceipt, url: "/dashboard/orders" },
    { title: "Menu", icon: VscLayoutMenubar, url: "/dashboard/menu" },
    { title: "Notifications", icon: AiOutlineMessage, url: "/dashboard/notifications" },
    { title: "Deliveries", icon: HiOutlineTruck, url: "/dashboard/deliveries" },
    { title: "Settings", icon: HiOutlineCog6Tooth, url: "/dashboard/settings" },
  ];