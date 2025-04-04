function NoPage() {
    return (
        <div className="w-screen h-screen grid justify-items-center content-center gap-16">
            <h1 className="text-4xl font-extrabold animate-bounce"> Error 404 </h1>
            <p className="italic font-bold">
                <i className="fa fa-warning animate-pulse"></i>
                &nbsp; The page you are looking for does not exist....
            </p>
        </div>
    );
}

export default NoPage;