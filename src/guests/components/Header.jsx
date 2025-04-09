import { useNavigate } from "react-router-dom";
import Logo from "../../components/logo.png";
import LogOut from "./LogOut";

function Header() {
    const home = useNavigate();
    return (
        <div className={`bg-white shadow-xl mb-3 p-2 md:p-3 flex items-center justify-between`}>
            <div className="flex items-center cursor-pointer" onClick={() => home("/user")}>
                <img
                    alt="logo"
                    src={Logo}
                    className="w-8"
                />
                <h1 className="text-xl font-bold ml-2">JBSearch</h1>
            </div>
            <div className="text-gray-800 cursor-pointer py-2 px-4 transition duration-300 hover:bg-gray-300 md:hidden">
                <LogOut />
            </div>
        </div>
    );
}

export default Header;