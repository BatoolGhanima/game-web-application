import { useState } from "react";
import useSortOrderStore from "../state-managment/sort0roderStore";

const SortSelector = () => {
    // List of available sorting options
    const sortOrders = [
        { value: "", label: "Relevance" },
        { value: "-added", label: "Date added" },
        { value: "name", label: "Name" },
        { value: "-release", label: "Release date" },
        { value: "-metacritic", label: "Popularity" },
        { value: "-rating", label: "Average rating" },
    ];
    
    // Retrieve values and actions from Zustand Store
    const selectSortOrder = useSortOrderStore((state) => state.selectSortOrder);
    const setSelectSortOrder = useSortOrderStore((state) => state.setSelectSortOrder);
    
    // Find the label of the currently selected sorting option
    const selectedSortLabel = sortOrders.find((order) => order.value === selectSortOrder)?.label || "Relevance";

    // Manage dropdown open/close state
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Button to toggle dropdown */}
            <button
                id="sortDropdownButton"
                className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 flex items-center mx-2"
                onClick={() => setIsOpen(!isOpen)}
            >
                Order by: {selectedSortLabel}
                <svg className="w-2.5 h-2.5 ml-3" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
            </button>

            {/* Display dropdown if open */}
            {isOpen && (
                <div className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute mt-1 left-0">
                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                        {sortOrders.map((order) => (
                            <li
                                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                                key={order.value}
                                onClick={() => {
                                    setSelectSortOrder(order.value);
                                    setIsOpen(false); // Close dropdown after selection
                                }}
                            >
                                {order.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default SortSelector;
