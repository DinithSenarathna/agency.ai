import React from 'react'
import assets from '../assets/assets'

const ThemeToggleButton = ({ theme, setTheme }) => {
    return (
        <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle Theme"
            className="relative flex items-center justify-center w-11 h-11 rounded-full border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-md hover:shadow-xl hover:ring-4 hover:ring-primary/40 transition-all duration-300 ease-in-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
            {theme === 'dark' ? (
                <img
                    src={assets.sun_icon}
                    className="w-6 h-6 text-yellow-400 transition-transform duration-500 ease-in-out hover:rotate-180 hover:scale-125"
                    alt="Light Mode"
                />
            ) : (
                <img
                    src={assets.moon_icon}
                    className="w-6 h-6 text-blue-500 transition-transform duration-500 ease-in-out hover:rotate-180 hover:scale-125"
                    alt="Dark Mode"
                />
            )}
        </button>
    )
}

export default ThemeToggleButton