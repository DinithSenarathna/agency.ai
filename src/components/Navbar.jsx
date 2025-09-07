import React, { useState, useEffect } from 'react'
import assets from '../assets/assets'
import ThemeToggleButton from './themeToggleButton' // Capitalized
import { motion } from "motion/react"

const Navbar = ({ theme, setTheme }) => {

    const [sidebarOpen, setSidebarOpen] = useState(false)

    // ✅ Apply dark class to <html> dynamically
    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
    }, [theme])

    return (
        <motion.div initial={{opacity: 0, y: -50}} animate={{opacity:1, y:0}} transition={{duration: 0.6, ease: 'easeOut'}} className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/80 dark:bg-gray-900 transition-colors duration-300'>

            <img src={theme === 'dark' ? assets.logo_dark : assets.logo} className='w-32 sm:w-40 transition-transform duration-300 hover:scale-105' alt='Logo' />

            <div className={`text-gray-700 dark:text-white sm:text-sm ${!sidebarOpen ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>
                <img src={assets.close_icon} alt='' className='w-5 absolute right-4 top-4 sm:hidden cursor-pointer hover:rotate-90 transition-transform duration-300' onClick={() => setSidebarOpen(false)} />

                {['Home', 'Services', 'Our Work', 'Contact Us'].map((label, idx) => (
                    <a
                        key={label}
                        onClick={() => setSidebarOpen(false)}
                        href={`#${label.toLowerCase().replace(/\s+/g, '-')}`}
                        className='relative group hover:text-primary transition-all duration-300 ease-in-out'
                    >
                        {label}
                        <span className='absolute left-0 bottom-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-300'></span>
                    </a>
                ))}
            </div>

            <div className='flex items-center gap-2 sm:gap-4'>
                <div className="rounded-full border border-gray-300 dark:border-gray-700 shadow-sm hover:bg-gray-200 dark:hover:bg-gray-800 hover:shadow-lg hover:ring-2 hover:ring-primary transition-all p-1">
                    <ThemeToggleButton theme={theme} setTheme={setTheme} />
                </div>

                <img src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} alt='' onClick={() => setSidebarOpen(true)} className='w-8 sm:hidden cursor-pointer hover:scale-110 transition-transform duration-300' />

                <a href='#contact-us' className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-110 hover:bg-gradient-to-r hover:from-primary hover:to-purple-500 hover:shadow-xl transition-all'>
                    Connect <img src={assets.arrow_icon} width={14} alt='Arrow' />
                </a>
            </div>

        </motion.div>
    )
}

export default Navbar
