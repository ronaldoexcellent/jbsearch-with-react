import { useState } from "react";
import { Link } from "react-router-dom";

function PageTitle({ title }) {
  return title;
}

function MenuBtn({ reverseColor, adjust, func }) {
  const rC = !reverseColor? `text-white hover:bg-white hover:text-gray-800` : `text-gray-800 hover:bg-gray-800 hover:text-white`
  return (
    <button
      className={`${adjust ? "w-full text-right" : ""} py-4`}
      onClick={ func }
    >
      <span className={`p-4 transition text-cemter duration-300 focus:outline-none font-extrabold ${rC}`}>☰</span>
    </button>
  )
}

function Sidebar({ menuItems }) {
  const [isSidebarOpen, setSidebar] = useState(false);
  const [adjust, doAdjust] = useState(isSidebarOpen);
  // isSidebarOpen = !isSidebarOpen;
  return (
    <>
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "w-72" : ""
        } bg-gray-800 text-white transition-all duration-300 ease-in-out fixed h-screen md:relative md:translate-x-0 top-0 left-0 right-0 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <MenuBtn
          adjust={adjust}
          func={() => setSidebar(!isSidebarOpen)}
        />
        
        <ul className={`mt-16 ${isSidebarOpen ? "space-y-4" : ""}`}>
          {menuItems.map((item, index) => (
            <Link to={item.address} key={index}>
              <li className={`p-4 hover:bg-gray-600 rounded-md transition-gpu duration-300`}>
                <i className={`fas ${item.icon} ${isSidebarOpen ? "mr-3" : ""}`}></i>
                { isSidebarOpen && (<span>{item.name}</span>) }
              </li>

              {/* Page Title */}
              <PageTitle className="hidden" hidden title={item.title} />
            </Link>
            
          ))}
        </ul>
      </div>
    </>
  );
}

export { MenuBtn, Sidebar };