import { Outlet } from 'react-router-dom';
import SidebarData from "./utils/SidebarData";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";

export default function Layout() {
  return (
    <div className={"bg-gray-100 text-gray-900"}>
      <div className="flex">
        <Sidebar menuItems={SidebarData} />
        <main className="p-4">
          <Hero />
          <Outlet />
        </main>
        </div>
    </div>
  )
}