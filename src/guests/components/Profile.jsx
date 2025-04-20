import { useState } from "react"
import toast from "react-hot-toast";
import avatar from "../utils/avatar.jpg";
import CVUpload from "./CVUpload";

export default function GeneralProfile({guest}) {
    const [npwd, setNPWD] = useState('');
    const [cpwd, setCPWD] = useState('');
    const [cv, setCV] = useState('');
    const [d, setD] = useState({
        name: '',
        email: '',
        tel: ''
    });
    const [gen, setGen] = useState('male');
    const [disabled, setDisabled] = useState(true);

    function dis() {
        setDisabled(!disabled);
        if (!disabled) {
            toast.success('Updated!');
        }
    }

    function update(e) {
        const { name, value } = e.target;
        setD((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    return (
        <div className="px-3 bg-gray-800 border-4 border-gray-600 rounded-2xl md:w-[630px] mx-auto text-white shadow-xl">
            <div className="bg-white mx-auto w-24 border-4 rounded-full items-center justify-center grid cursor-pointer">
                <img
                    alt="avatar"
                    src={avatar}
                    className="rounded-full w-[240px] h-[100px]"
                />
                <span className="fa fa-camera text-center absolute mt-20 ml-14 bg-gray-800 mx-auto px-2 text-white text-lg hover:bg-white hover:text-gray-800"></span>
            </div>

            <h1 className="text-2xl font-bold capitalize text-center py-4"> {guest} </h1>

            <div className="text-right py-2">
                <button
                    onClick={dis}
                    className="py-2 px-3 bg-gray-800 hover:bg-white hover:text-gray-800 text-white cursor-pointer font-bold border-2 border-white"
                >
                    { disabled ? "Edit" : "Save" }
                </button>
            </div>

            {
                Object.keys(d).map((key) => (
                    <div key={key}>
                        <label htmlFor={key} className="capitalize">
                            {key}:
                        </label>
                        <input
                            type="text"
                            id={key}
                            name={key}
                            className="block w-full mb-4 p-2 border border-gray-500 rounded"
                            value={d[key]}
                            onChange={update}
                            disabled={disabled}
                            required
                        />
                    </div>
                ))
            }

            <label htmlFor="gender" className="pb-2 block"> Gender: </label>
            <select
                name="gender"
                className={`block w-full mb-4 p-2 text-black cursor-pointer border border-gray-500 rounded`}
                value={gen}
                onChange={(e) => setGen(e.target.value)}
                disabled={disabled}
                required
            >
                <option value="male"> Male </option>
                <option value="female"> Female </option>
            </select>

            <label id="cv" className="pb-2 block"> CV: </label>
            <CVUpload name="cv" />
            <input
                type="file"
                name="cv"
                className={`block w-full cursor-pointer mb-4 p-2 border border-gray-500 rounded md:hidden`}
                value={cv}
                onChange={(e) => setCV(e.target.value)}
                disabled={disabled}
                required
            />

            <br />
            <br />

            <h3 className="font-bold text-xl pb-4"> Change Password </h3>

            <label htmlFor="currentPWD" className="pb-2 block"> Current Password: </label>
            <input
                type="password"
                name="currentPWD"
                className={`block w-full mb-4 p-2 border border-gray-500 rounded`}
                value={cpwd}
                onChange={(e) => setCPWD(e.target.value)}
                disabled={disabled}
                required
            />
            <label htmlFor="newPWD" className="pb-2 block"> New Password: </label>
            <input
                type="password"
                name="newPWD"
                className={`block w-full mb-6 p-2 border border-gray-500 rounded`}
                value={npwd}
                onChange={(e) => setNPWD(e.target.value)}
                disabled={disabled}
                required
            />
        </div>
    )
}