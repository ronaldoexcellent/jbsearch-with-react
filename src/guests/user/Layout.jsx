import { Outlet } from 'react-router-dom';
import SidebarData from "./utils/SidebarData";
import {Sidebar} from "../components/Sidebar";
import Hero from "../components/Hero";

export default function Layout() {
  return (
    <div className={`bg-gray-100 text-gray-900 fixed flex top-0 left-0 right-0 bottom-0`}>
      <Sidebar menuItems={SidebarData} />
      <main className='w-11/12'>
        <Hero />
        <div className='bg-red-400 h-screen'>
          <Outlet />
        </div>
      </main>
    </div>
  )
}