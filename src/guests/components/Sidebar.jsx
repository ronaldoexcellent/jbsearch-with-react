import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { startProgress, stopProgress } from "./loaders/nprogress/ProgressUtils";
import LogOut from "../components/LogOut";

function MenuBtn({ reverseColor, adjust, func }) {
  const rC = !reverseColor? `text-white hover:bg-white hover:text-gray-800` : `text-gray-800 hover:bg-gray-800 hover:text-white`
  return (
    <button
      className={`${adjust ? "w-full text-right" : ""} hidden md:block py-4`}
      onClick={ func }
    >
      <span className={`p-4 transition text-cemter duration-300 focus:outline-none font-extrabold ${rC}`}>☰</span>
    </button>
  )
}

function Sidebar({ menuItems }) {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [adjust, doAdjust] = useState(!isSidebarOpen);
  const nav = useNavigate();

  const navigate = (target) => {
    startProgress();
    const timer = setTimeout(() => stopProgress(), 3000);
    setTimeout(() => nav(target), 4000);
    return () => clearTimeout(timer);
  };

  return (
    <>
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "md:w-72" : "md:w-12"
        } bg-gray-800 text-white transition-all z-40 duration-300 ease-in-out w-full fixed md:h-screen md:translate-x-0 bottom-0 md:top-0 left-0 right-0`}
      >
        <MenuBtn
          adjust={adjust}
          func={() => setSidebar(!isSidebarOpen)}
        />

        {!isSidebarOpen ? <hr className="hidden md:block" /> : ""}
        
        <ul className={`md:mt-6 flex md:block justify-around ${isSidebarOpen ? "space-y-4" : ""}`}>
          {menuItems.map((item, index) => (
              <li title={item.title} onClick={() => navigate(item.address)} key={index} className={`cursor-pointer py-4 px-6 md:px-4 hover:bg-gray-600 items-center flex rounded-md transition-gpu duration-300`}>
                <i className={`fas ${item.icon} ${isSidebarOpen ? "mr-3" : ""}`}></i>
                { isSidebarOpen && (<span>{item.name}</span>) }
                <span className={`${item.title === "Notifications"? "block":"hidden"} absolute -mt-3.5 ml-2 bg-red-500 text-white text-xs w-2 h-2 rounded-full flex items-center justify-center`}></span>
              </li>
          ))}
          <li title="Log Out" className={`hidden absolute bottom-0 w-full cursor-pointer items-center md:flex py-4 px-6 md:px-4 hover:bg-gray-600 rounded-md transition-gpu duration-300`}>
            <LogOut handle={isSidebarOpen} className="hidden md:block" />
          </li>
        </ul>
      </div>
    </>
  );
}

export { MenuBtn, Sidebar };