import React from 'react'
import {  NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import useThemeContext from '../../Contexts/ThemeContext/ThemeContext'
function Header() {
    const [theThemeMode, setTheThemeMode] = useState("light")
    const [src, setSrc] = useState("https://cdn-icons-png.flaticon.com/512/439/439842.png")
    const { themeMode, darkTheme, lightTheme } = useThemeContext()
    const onChangeBtn = () => {
        if (theThemeMode === 'dark') {
            setTheThemeMode("light")
            localStorage.setItem("theme", "light")
            setSrc("https://cdn-icons-png.flaticon.com/512/439/439842.png")
            console.log(localStorage.getItem("theme"));

        } else {
            setTheThemeMode("dark")
            localStorage.setItem("theme", "dark")
            setSrc("https://cdn-icons-png.flaticon.com/512/13660/13660722.png")
            console.log(localStorage.getItem("theme"));
        }
    }
    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            setTheThemeMode("dark")
            setSrc("https://cdn-icons-png.flaticon.com/512/13660/13660722.png")
        }
        else {
            setTheThemeMode("light")
            setSrc("https://cdn-icons-png.flaticon.com/512/439/439842.png")
        }
    }, [theThemeMode])

    /*     actual change in theme */
    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(theThemeMode)
        
    }, [theThemeMode])

    return (
        <header className='sticky top-0 dark:bg-black bg-slate-300 w-full '>
            <div className='flex    p-1 rounded-lg dark:bg-[#212121] bg-slate-300 justify-between'>
                <div className='flex border-solid border-2 border-gray-700  p-1 rounded-2xl gap-1 '>
                    <img src="https://raw.githubusercontent.com/CodersHub-in/Portfolio/main/src/Components/Header/resources/RoBoico.png" className='h-10 w-10 rounded-[50%]' alt="" />
                    <h2 className='text-3xl dark:text-white'>Web App</h2>
                </div>
                <div className='flex gap-1 justify-center text-center items-center p-1 '>

                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            ` flex justify-center text-center items-center  py-2 pr-4 pl-3 duration-200  ${isActive ? "text-orange-700 underline" : "text-black"} 
                        bg-[rgb(28 31 38)] w-20 h-8 hover:shadow-cyan-500/50 rounded-[30px]  cursor-pointer border-2 border-black border-solid    hover:bg-black     hover:text-orange-700 lg:p-0`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/github/CodersHub-in"
                        className={({ isActive }) =>
                            ` flex justify-center text-center items-center  py-2 pr-4 pl-3 duration-200  ${isActive ? "text-orange-700 underline" : "text-black dark:text-white"} 
                        bg-[rgb(28 31 38)] w-20 h-8 hover:shadow-cyan-500/50 rounded-[30px]  cursor-pointer border-2 border-black border-solid    hover:bg-black     hover:text-orange-700 lg:p-0`
                        }
                    >
                        GitHub
                    </NavLink>


                </div>
                <div className='flex  justify-center text-center items-center p-1 '>
                    <div className='flex'>
                        <img src={src} id='themeee' className=' h-[35px] transition-all  cursor-pointer ' onClick={onChangeBtn} alt="" />

                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header
