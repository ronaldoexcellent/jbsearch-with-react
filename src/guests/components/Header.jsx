import LogOut from "./LogOut";

function Header() {
    return (
        <div className={`bg-white shadow-inner mb-3 p-2 md:p-3 flex items-center`}>
            <h1 className="text-xl font-bold ml-2">JBSearch</h1>
            <div className="text-gray-800 absolute right-5 cursor-pointer py-2 px-4 transition duration-300 hover:bg-gray-300 md:hidden">
                <LogOut />
            </div>
        </div>
    );
}

export default Header;