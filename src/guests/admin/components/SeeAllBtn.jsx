import { useNavigate } from "react-router-dom";

function SeeAll({ target }) {
    const nav = useNavigate();

    return (
        <button
            className="bg-indigo-500 transition-all ease-in duration-200 text-xs text-white active:bg-indigo-600 hover:shadow-xl hover:shadow-gray-700 hover:outline hover:outline-white font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
            type="button"
            onClick={() => nav(target)}
        >
            See all
        </button>
    )
}

export default SeeAll;