import React from 'react'
import ScocialLinks from '../ScocialLinks/ScocialLinks'
import { NavLink } from 'react-router-dom'

function SideBar() {



    return (
        <section className=" sideBar min-h-[70vh] h-min transition-all dark:bg-[#000000] fixed   top-[56px] left-0  border-solid border-2 border-gray-700 dark:text-white bg-slate-300 text-black w-0 invisible overflow-hidden m-3 p-1  rounded-2xl "   >

            <div>
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
            <div>s</div>
            <div>s</div>
            <ScocialLinks />
        </section>
    )
}

export default SideBar
