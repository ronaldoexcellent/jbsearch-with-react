function LogOut({ handle }) {
    return (
        <>
            <i className={`fas fa-sign-out animate-bounce cursor-pointer ${handle? "mr-3":""}`}></i>
            { handle && (<span>Log Out</span>) }
        </>
    )
}
export default LogOut;