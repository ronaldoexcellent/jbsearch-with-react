import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { Skeleton } from "antd";

function UserList({ users }) {
    const [loading, setLoading] = useState(true);
    const [u, setU] = useState(users.map(i => ({ ...i, status: i.status })));
    const statusUpdate = (index) => {
        setU(s => s.map((itm, idx) => idx === index ? { ...itm, status: !itm.status } : itm));
        u[index].status? toast.success('Activated!') : toast.error("Deactivated");
    };

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 3000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <motion.div
            initial={{ x: "-100vw" }}
            animate={{ x: 0 }}
            // exit={{ x: "100vw" }}
            transition={{ type: "tween", duration: 0.5 }}
            className="w-full xl:w-4/12 md:px-4 mb-4"
        >
            <Skeleton loading={loading} active>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="rounded-t mb-0 px-4 py-3 border-0">
                        <div className="flex flex-wrap items-center">
                            <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-blueGray-700">
                                    Users Accounts
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="block w-full overflow-x-auto">
                        <table className="items-center w-full bg-transparent border-collapse text-sm">
                            <thead className="bg-gray-700 text-white">
                                <tr>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        User:
                                    </th>
                                    <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                        Status:
                                    </th>
                                    <th
                                        className="min-w-[140px] px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
                                    > Actions: </th>
                                </tr>
                            </thead>
                            <tbody className="cursor-pointer">
                                {!u[0] && <div className="p-4 text-center w-full"> No Users </div> }
                                {(u.map((user, index) => (
                                    <tr key={index} className="hover:bg-gray-200">
                                        <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left">
                                            {user.id}
                                        </th>
                                        <td className={`${user.status? "text-emerald-700 font-bold":"text-red-700 font-bold"} border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4`}>
                                            {user.status ? "Active" : "Inactive"}
                                        </td>
                                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                                            <td className="relative w-full grid gap-2">
                                                <td
                                                    className={`overflow-hidden rounded-xl ${!user.status? "bg-green-200":"bg-red-200"} cursor-pointer`}
                                                    onClick={() => statusUpdate(index)}
                                                >
                                                    <td
                                                        className={`w-[85%] lg:w-[80%] hover:shadow-lg ${!user.status? "bg-emerald-500 hover:bg-emerald-700 transition duration-300 float-right":"bg-red-500 hover:bg-red-700"} font-semibold shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center`}
                                                    >
                                                        {user.status ? "Deactivate" : "Activate"}
                                                    </td>
                                                </td>
                                            </td>
                                        </td>
                                    </tr>
                                )))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Skeleton>
        </motion.div>
    )
}

export default UserList;