import { Outlet } from 'react-router-dom';
import Header from '../components/Header'
import SidebarData from "./utils/SidebarData";
import {Sidebar} from "../components/Sidebar";
import Hero from "../components/Hero";
import ContactDevs from "../components/ContactDevs"
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <div className={`bg-gray-200 text-gray-900 fixed flex top-0 left-0 right-0 bottom-0`}>
      <Sidebar menuItems={SidebarData}/>
      <section className='w-full md:ml-12 overflow-y-scroll'>
        <Hero />
        <Header />
        <main className='h-full'>
          <Outlet />
        </main>
        <ContactDevs />
        <Footer />
      </section>
    </div>
  )
}