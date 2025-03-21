function Footer({ AppTitle }) {
    return (
        <div className={`bg-gray-800 text-white shadow p-4 mb-6 flex justify-between items-center`}>
            <h1 className="text-xl font-bold">{AppTitle}</h1>
            <div className="flex items-center space-x-4">
                <i className="fa fa-facebook"></i>
                <i className="fa fa-x"></i>
                <i className="fa fa-instagram"></i>
                <i className="fa fa-mail"></i>
            </div>
        </div>
    );
}

export default Footer;