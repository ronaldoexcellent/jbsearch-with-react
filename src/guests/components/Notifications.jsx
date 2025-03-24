const Notifications = () => {
    return (
        <div className="px-3">
            <h1 className="underline p-4 text-lg md:text-2xl mb-3 font-extrabold text-center">Notifications</h1>
            <div className="text-right bg-white">
                Clear All
            </div>

            <button className="bg-white">
                <span className="font-bold">Your application was sent to IOI</span>
                <span className="text-transparent">6 mins ago</span>
            </button>
        </div>
    )
}

export default Notifications;