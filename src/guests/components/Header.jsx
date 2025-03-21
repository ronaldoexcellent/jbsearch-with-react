import { MenuBtn } from "./Sidebar";

function Header({ AppTitle }) {
    return (
        <div className={`bg-white shadow-inner mb-6 flex items-center`}>
            <MenuBtn reverseColor={true} className="md:hidden"  />
            <h1 className="text-xl font-bold ml-2">{AppTitle}</h1>
            <div className="flex items-center justify-end mr-4 w-full space-x-4">
                <button className="relative md:hidden">
                    <i className="fas fa-bell text-lg"></i>
                    <span className="absolute top-0 right-0 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">3</span>
                </button>
            </div>
        </div>
    );
}

export default Header;