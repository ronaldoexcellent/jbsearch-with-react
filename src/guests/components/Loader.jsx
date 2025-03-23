import Logo from "./../../logo.svg";

function Loader() {
    return (
        <div className={`gray fixed top-0 bottom-0 left-0 right-0 grid justify-center items-center`}>
            <img
                src={Logo}
                alt="Logo"
            />
        </div>
    )
}

export default Loader;