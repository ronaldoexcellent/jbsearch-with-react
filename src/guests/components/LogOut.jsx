import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

function LogOut({ handle }) {
    const navigate = useNavigate();
    return (
        <>
            <i
                onClick={() => {
                    toast.success("You've Logged Out");
                    navigate('/');
                }}
                className={`fas fa-sign-out md:animate-bounce cursor-pointer ${handle? "mr-3":""}`}>
                { handle && (<span> &nbsp;Log Out</span>) }
            </i>
        </>
    )
}
export default LogOut;