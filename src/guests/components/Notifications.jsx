import { useEffect, useState } from "react";
import NoContent from "./NoContent";
import { Skeleton } from "antd";
import { motion } from "framer-motion";
import notification from "../user/utils/Notifications";

const Notifications = () => {
    const [loading, setLoading] = useState(true);
    const notifications = notification.filter(n => n.headline);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);
    
    if (notifications.length === 0) {
        return <NoContent title="Notifications" />
    }

    return (
        <div className="px-3">
            <h1 className="underline p-4 text-lg md:text-2xl mb-3 font-extrabold text-center">Notifications</h1>
            <div className="text-right bg-white mb-3">
                <button className="py-2 px-3 font-bold hover:bg-gray-800 hover:text-white">Clear All</button>
            </div>

            {notifications.map((n, index) => (
                <motion.div
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    // exit={{ x: "100vw" }}
                    transition={{ type: "tween", duration: 0.5 }}
                    className="bg-white p-3 font-bold hover:bg-gray-400 cursor-pointer"
                    index={index}
                >
                    <Skeleton loading={loading} active className="bg-reg-400">
                        <span>{n.headline}</span>
                        <span className="text-transparent">6 mins ago</span>
                    </Skeleton>
                </motion.div>
            ))}
        </div>
    )
}

export default Notifications;