import React from 'react'
import { Link, NavLink } from 'react-router-dom' 
import useThemeContext, { ThemeContext , ThemeProvider } from '../../Contexts/ThemeContext/ThemeContext'
function Header() {

const { themeMode , darkTheme, lightTheme  } =  useThemeContext()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if (darkModeStatus) {
            darkTheme()
        } else {
            lightTheme()
        }
    }

    return (
        <header className='sticky top-0 dark:bg-black bg-slate-300  '>
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
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/13660/13660722.png" id='theme' className=' h-[35px]  ' onClick={onChangeBtn} alt="" />
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                value=""
                                className="sr-only peer"
                                onChange={onChangeBtn}
                                checked={themeMode === "dark"}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900">Toggle Theme</span>
                        </label>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header
