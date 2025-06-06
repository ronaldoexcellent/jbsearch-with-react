import { Outlet } from 'react-router-dom';
import SidebarData from "./utils/SidebarData";
import { Sidebar } from "../components/Sidebar";
import Header from "./../components/Header";
import Hero from "../components/Hero";
import ContactDevs from "../components/ContactDevs"
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className={`bg-gray-200 text-gray-900 fixed flex top-0 left-0 right-0 bottom-0`}>
      <Sidebar menuItems={SidebarData}/>
      <section className='w-full md:ml-12 flex flex-col'>
        <Header target="admin" />
        <Hero name="Admin" guest='admin' />
        <main className='flex-grow h-screen overflow-y-scroll'>
          <Outlet />
        </main>
        <Footer />
        <ContactDevs />
      </section>
    </div>
  )
}