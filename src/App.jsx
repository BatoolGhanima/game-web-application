
import SideBar from "./components/SideBar";

import { RouterProvider } from "react-router-dom";
import React from "react";
import MainContent from './components/MainContent'
import router from './router'
function App() {
    return (
        <>
            <RouterProvider router={router}>

            <div className="m-0 p-0">
 
            </div>
            <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 ">
                
                <div className="grid grid-cols-6 gap-4">
                    <SideBar />
                    <MainContent />
                </div>

            </div>
            </RouterProvider>
        </>
    );
}

export default App;
