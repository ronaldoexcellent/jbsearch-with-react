import { Outlet } from 'react-router-dom';
import SidebarData from "./utils/SidebarData";
import { Sidebar } from "../components/Sidebar";
import Header from "./../components/Header";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className={"bg-gray-100 text-gray-900"}>
      <div className="flex">
        <Sidebar menuItems={SidebarData} />
        <main className="p-4 w-full">
          <Hero />
          <Header />
          <Outlet />
        </main>
      </div>
    </div>
  )
}