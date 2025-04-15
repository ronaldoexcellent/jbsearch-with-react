import { useState, useEffect } from "react";
import { Card, Skeleton } from "antd";
import { motion } from "framer-motion";

function NoContent({ title }) { 
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <Card>
            <Skeleton rows="1" loading={loading} active>
                <motion.div 
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    // exit={{ x: "100vw" }}
                    transition={{ type: "tween", duration: 0.5 }}
                    className="bg-white rounded-lg shadow-md italic grid justify-center items-center w-full h-full"
                >
                    No { title }
                </motion.div>
            </Skeleton>
        </Card>
    )
}

export default NoContent;