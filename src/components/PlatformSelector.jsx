import { useState } from "react";
import usePlatform from "../hooks/usePlatform";
import usePlatformStore from '../state-managment/platformStore'; 
import Loading from "./Loading";
import DataError from "./DataError";

const PlatformSelector = () => {
    const { data, isError , isLoading } = usePlatform();
    const selectPlatform = usePlatformStore((state) => state.selectPlatform);
    const setSelectPlatform = usePlatformStore((state) => state.setSelectPlatform);
    const [isOpen, setIsOpen] = useState(false); //to control open and close the platform selector

    if (isLoading)
        return <div className="mt-32">  <Loading></Loading></div>;
 
     if (isError)
       return <DataError error={isError}></DataError>
 
    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                type="button"
            >
            
                {/* show the selected platform or "Platforms" if no platform is selected */}
                {selectPlatform?.name || "Platforms"}
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {/* show the componet whene open */}
            {isOpen && (
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {data?.map((platform) => (
                            <li
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                                key={platform.id}
                                onClick={() => {
                                    setSelectPlatform(platform); // detrmine the selected platform
                                    setIsOpen(false); // close the platform selector
                                }}
                            >
                                {platform.name}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </>
    );
};

export default PlatformSelector;
