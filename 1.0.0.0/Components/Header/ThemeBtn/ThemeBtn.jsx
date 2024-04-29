import React from 'react'
import { useEffect, useState } from 'react'


function ThemeBtn() {
    const [src, setSrc] = useState("https://cdn-icons-png.flaticon.com/512/439/439842.png")

    const [themeMode, setThemeMode] = useState("light")
    //setting themeMode and also storing it in local storage
    const lightTheme = () => {
        setThemeMode("light")
        localStorage.setItem("theme", "light")
    }

    const darkTheme = () => {
        setThemeMode("dark")
        localStorage.setItem("theme", "dark")

    }

    // actual change in className of body to change the theme

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])



    // get theme from local storage and set it to themeMode
    useEffect(() => {
        if (localStorage.getItem("theme") === "dark") {
            setThemeMode("dark")
            setSrc("https://cdn-icons-png.flaticon.com/512/13660/13660722.png")
        }
        else {

            setThemeMode("light")
            setSrc("https://cdn-icons-png.flaticon.com/512/439/439842.png")
        }
    }, [themeMode])
    //Here is the function to handel onClick of button
    const onChangeBtn = () => {
        if (themeMode === "light") {
            darkTheme()

        } else {
            lightTheme()
        }
    }
    return (
        <div className='flex  justify-center text-center items-center p-1 '>
            <div className='flex'>
                <img src={src} id='themeee' className=' h-[35px] transition-all  cursor-pointer ' onClick={onChangeBtn} alt="" />

            </div>
        </div>
    )
}

export default ThemeBtn
