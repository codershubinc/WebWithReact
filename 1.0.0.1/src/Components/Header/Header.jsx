import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeBtn from './ThemeBtn/ThemeBtn'
import SideBar from '../SideBar/SideBar'
import SideBarBtn from '../SideBar/SideBarBtn/SideBarBtn'
function Header() {



    return (

        <header className='sticky top-0 dark:bg-black bg-slate-300 w-full h-14 transition-all '>

            <div className='flex    p-1 rounded-lg dark:bg-[#212121] bg-slate-300 justify-between'>
                <div className='flex'>
                    <div className='flex justify-center items-center px-1  '>
                        {/* sideBarBtn */}
                        <SideBarBtn />
                    </div>
                    <div className='flex border-solid border-2 border-gray-700  p-1 rounded-2xl gap-1 '>
                        <img src="https://raw.githubusercontent.com/CodersHub-in/Portfolio/main/src/Components/Header/resources/RoBoico.png" className='h-10 w-10 rounded-[50%]' alt="" />
                        <h2 className='text-3xl dark:text-white  font-["jersey-25"]  '>Web App</h2>
                    </div>

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
                <div  className='flex gap-1 justify-center text-center items-center ' >
                    <NavLink
                        to="/login"
                        className={({ isActive }) =>
                            ` flex justify-center text-center items-center  py-2 pr-4 pl-3 duration-200  ${isActive ? "text-orange-700 underline" : "text-black dark:text-white"} 
                        bg-[rgb(28 31 38)] w-20 h-8 hover:shadow-cyan-500/50 rounded-[30px]  cursor-pointer border-2 border-black border-solid    hover:bg-black     hover:text-orange-700 lg:p-0`
                        }
                    >
                        Login
                    </NavLink>
                    
                    <NavLink
                        to="/signup"
                        className={({ isActive }) =>
                            ` flex justify-center text-center items-center  py-2 pr-4 pl-3 duration-200  ${isActive ? "text-orange-700 underline" : "text-black dark:text-white"} 
                        bg-[rgb(28 31 38)] w-20 h-8 hover:shadow-cyan-500/50 rounded-[30px]  cursor-pointer border-2 border-black border-solid    hover:bg-black     hover:text-orange-700 lg:p-0`
                        }
                    >
                        SignUp
                    </NavLink>
                    <ThemeBtn />
                </div>
            </div>
            {/* Here is a sidebar containing links */}
            <SideBar />
        </header>


    )
}

export default Header
