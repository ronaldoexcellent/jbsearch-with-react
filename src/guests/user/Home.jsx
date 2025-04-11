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
        <Header />
        <Hero name="User" guest='user' />
        <main className='flex-grow h-screen overflow-y-scroll'>
          <Outlet />
        </main>
        <Footer />
        <ContactDevs />
      </section>
      {/* 

Updated Code:
jsx
<div className="bg-gray-200 text-gray-900 fixed top-0 left-0 right-0 bottom-0 flex flex-col md:flex-row">
// Sidebar 
<Sidebar menuItems={SidebarData} className="md:fixed md:top-0 md:left-0 md:bottom-0 w-full md:w-auto bottom-0 z-50" />

 Main Content Wrapper 
<div className="w-full flex flex-col">
  // Hero Section 
  <Hero name="User" guest="user" />

  // Scrollable Main Content 
  <main className="flex-grow overflow-y-scroll">
    <Outlet />
  </main>

  // Footer 
  <Footer />
  <ContactDevs />
</div>
</div>
*/}
    </div>
  )
}