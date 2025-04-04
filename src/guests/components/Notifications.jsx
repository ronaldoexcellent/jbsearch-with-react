import NoContent from "./NoContent";
import { Skeleton } from "antd";
import { motion } from "framer-motion";
import notification from "../user/utils/Notifications";

const Notifications = () => {
    const notifications = notification.filter(n => n.applied);
    if (notifications.length === 0) {
        return <NoContent title="Saved Jobs" />
    }

    return (
        <div className="px-3">
            <h1 className="underline p-4 text-lg md:text-2xl mb-3 font-extrabold text-center">Notifications</h1>
            <div className="text-right bg-white">
                <button className="py-2 px-3 font-bold">Clear All</button>
            </div>

            {notifications.map((n, index) => (
                <motion.div
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    // exit={{ x: "100vw" }}
                    transition={{ type: "tween", duration: 0.5 }}
                    className="bg-white p-3"
                    index={index}
                >
                    <Skeleton loading={loading} active>
                        <span className="font-bold">{n}</span>
                        <span className="text-transparent">6 mins ago</span>
                    </Skeleton>
                </motion.div>
            ))}
        </div>
    )
}

export default Notifications;