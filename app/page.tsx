import { getCurrentUser } from "@/lib/session";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import SideBar from "./components/Common/SideBar";
import Categories from "./components/Home/Categories";
import HeroSection from "./components/Home/HeroSection";
import MenuSection from "./components/Home/MenuSection";
import Promos from "./components/Home/Promos";
import { User } from "@prisma/client";


export default async function Home() {

  const user = await getCurrentUser()
  return (
    <main className="">
   
      <Header user={user as User} />
      <SideBar user={user as User}  />
      <HeroSection/>
      <Promos/>
    <Categories/>
    <MenuSection user={user as User} />
    <Footer/>
      
    </main>
  )
}
