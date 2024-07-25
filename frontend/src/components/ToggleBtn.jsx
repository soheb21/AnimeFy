import React, { useRef, useState } from 'react'

const ToggleBtn = () => {
    const [darkMode, setDarkMode] = useState(false);
    const themeRef = useRef(document.documentElement);

    const toggleTheme = () => {
        if (darkMode) {
            themeRef.current.classList.remove('dark');
        } else {
            themeRef.current.classList.add('dark');
        }
        setDarkMode(!darkMode);
    };
    return (
        <>
            <label htmlFor={"toggle"} className="flex h-full my-auto transition-all md:mr-4  items-center cursor-pointer">
                <div className="relative">
                    <button id={"toggle"} type="checkbox" className="sr-only" onClick={toggleTheme} />
                    <div className="block bg-gray-300 w-10 h-5 rounded-full"></div>

                    <div className="dot absolute left-1 top-1 dark:bg-custom-btn-primary-text bg-blue-400 w-3 h-3  rounded-full transition-transform transform-gpu dark:translate-x-6"></div>
                </div>

            </label>
        </>
    )
}

export default ToggleBtn