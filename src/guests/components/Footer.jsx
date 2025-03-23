function Footer() {
    return (
        <div className={`text-gray-800 bg-white md:mt-4 p-4 shadow flex justify-between items-center`}>
            <h1 className="text-xl font-bold"> JBSearch  Copyright &copy; {new Date().getFullYear()}</h1>
        </div>
    );
}

export default Footer;