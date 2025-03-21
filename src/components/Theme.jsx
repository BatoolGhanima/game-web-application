import  { useEffect } from 'react'
import themStore from '../state-managment/themStore';
import { GiNightSleep } from "react-icons/gi";
import { IoIosSunny } from "react-icons/io";

import '../styles/themeStyle.css'

export const Theme = () => {
    const theme = themStore((state) => state.theme);
    const toggleTheme = themStore((state) => state.toggleTheme);

    useEffect(() => {
       document.documentElement.classList.toggle("dark", theme === "dark")

    }, [theme])
    return (
        <>
            <div className="">
                <label className=" ">
                    <input type="checkbox" className=' hidden' onChange={toggleTheme} checked={theme === "light"} />
                    <span className="theme">{theme === "light" ?  <span className='themeMoon'>  <GiNightSleep /> </span>: <span className='themeSun'> <IoIosSunny /></span>   }</span>
                </label>
            </div>


        </>
    )
}
