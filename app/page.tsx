import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import SideBar from "./components/Common/SideBar";
import Categories from "./components/Home/Categories";
import HeroSection from "./components/Home/HeroSection";
import MenuSection from "./components/Home/MenuSection";
import Promos from "./components/Home/Promos";


export default function Home() {
  return (
    <main className="">
   
      <Header/>
      <SideBar/>
      <HeroSection/>
      <Promos/>
    <Categories/>
    <MenuSection/>
    <Footer/>
      
    </main>
  )
}
