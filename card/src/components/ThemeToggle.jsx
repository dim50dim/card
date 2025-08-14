import React, { useEffect, useState } from 'react'
import {Moon,Sun} from "lucide-react";
import { cn } from '@/lib/util';


const ThemeToggle = () => {

    const [isDarkMode,setIsDarkMode] = useState(false)
  
    useEffect(() => {
       const storedTheme = localStorage.getItem("theme")
       if(storedTheme === "dark"){
        setIsDarkMode(true)
       }
    },[])

    const toggleTheme =() => {
        if(isDarkMode) {
          document.documentElement.classList.add("dark")
          localStorage.setItem("theme","light")

            setIsDarkMode(false)

        }else{
          document.documentElement.classList.remove("dark")
          localStorage.setItem("theme","dark")
            setIsDarkMode(true)
        }
    }
  return (
    <div>
         <button onClick={toggleTheme} className={cn("fixe ma-sm:hidden top-5 right-5 p-2 rounded-full",
         "transition-colors duration-300 focus:outline-hidden")} > {isDarkMode ? (
            <Sun className='h-6 w-6 text-yellow-300'/>
        ) :( <Moon className='h-6 w-6 text-blue-900'/>
       ) } </button>
    </div>
  )
}

export default ThemeToggle
