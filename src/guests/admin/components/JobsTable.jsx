import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { Skeleton } from "antd";
import jobs from "../../utils/jobs";
import SeeAll from "./SeeAllBtn";

function JobsTable() {
    const [loading, setLoading] = useState(true);
    const [j, setJ] = useState(jobs.map(i => ({ ...i, workStatus: i.workStatus })));
    
    const accept = (index) => {
        setJ(s => s.map((itm, idx) => idx === index? { ...itm, workStatus: true } : itm));
        toast.success('Accepted');
    };
    const reject = (index) => {
        setJ(s => s.map((itm, idx) => idx === index? { ...itm, workStatus: false } : itm));
        toast.error('Rejected');
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
                className="w-full xl:w-8/12 mb-6 xl:mb-0 md:px-4"
            >
                <Skeleton loading={loading} active>
                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-lg rounded">
                        <div className="rounded-t mb-0 px-4 py-3 border-0">
                            <div className="flex flex-wrap items-center">
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                                    <h3 className="font-semibold text-base text-blueGray-700">
                                        Job Postings
                                    </h3>
                                </div>
                                <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                                    <SeeAll target="/admin/jobs" />
                                </div>
                            </div>
                        </div>
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center w-full bg-transparent border-collapse text-sm">
                                <thead className="bg-gray-700 text-white">
                                    <tr>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Jobs
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Post By:
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Status
                                        </th>
                                        <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { !j[0] && <div className="p-4 text-center w-full"> No Job Postings </div> }
                                    {(j.map((job, i) => (
                                        <tr className="hover:bg-gray-200">
                                            <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left">
                                                {job.title}
                                            </th>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                                                {job.employer}
                                            </td>
                                            <td className={`border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 ${(job.workStatus && typeof(job.workStatus) === "boolean") ? "italic text-green-500 font-bold" : !job.workStatus ? "italic text-red-500 font-bold" : (typeof(job.workStatus) === "string")? "text-black": ""}`}>
                                                {(job.workStatus && typeof(job.workStatus) === "boolean") ? "Accepted" : !job.workStatus ? "Rejected" : (typeof(job.workStatus) === "string")? "Pending":""}
                                            </td>
                                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 whitespace-nowrap p-4">
                                                <td className="relative w-full grid gap-2">
                                                    <td
                                                        className="overflow-hidden flex rounded-xl bg-green-200 cursor-pointer"
                                                        onClick={() => accept(i)}
                                                    >
                                                        <td
                                                            className="w-[85%] lg:w-[80%] p-1 hover:shadow-lg hover:bg-emerald-700 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-emerald-500"
                                                        >Accept</td>
                                                    </td>
                                                    <td
                                                        className="overflow-hidden flex rounded-xl bg-red-200 cursor-pointer"
                                                        onClick={() => reject(i)}
                                                    >
                                                    <td
                                                        className="w-[85%] lg:w-[80%] p-1 hover:shadow-lg hover:bg-red-700 shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-red-500"
                                                    >Reject</td>
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
    );
}

export default JobsTable;