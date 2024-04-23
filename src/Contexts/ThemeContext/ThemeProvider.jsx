import React from 'react'
import {  ThemeProvider } from './src/Contexts/ThemeContext/ThemeContext'
import { useState, useEffect } from 'react'
import Header from '../../Components/Header/Header'
function ThemeProviderjsx() {

    const [themeMode, setThemeMode] = useState("light")

    const lightTheme = () => {
        setThemeMode("light")
    }

    const darkTheme = () => {
        setThemeMode("dark")
    }
    // actual change in theme

    useEffect(() => {
        document.querySelector('html').classList.remove("light", "dark")
        document.querySelector('html').classList.add(themeMode)
    }, [themeMode])
    return (
        <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}  >
<Header/>
        </ThemeProvider>
    )
}

export default ThemeProviderjsx
