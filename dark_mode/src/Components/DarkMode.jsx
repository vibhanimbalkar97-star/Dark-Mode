import React, { useState } from 'react'
import './DarkMode.css'

const DarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className={`container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <h1>Dark Mode Toggle</h1>
            <div className="toggle-container">
                <label className="switch">
                    <input type="checkbox"
                        onChange={() => setIsDarkMode(!isDarkMode)}
                        checked={isDarkMode} />
                    <span className="slider round"></span>
                </label>
                <span className="mode-text">
                    {isDarkMode ? 'Dark Mode' : 'Light Mode'}
                </span>
            </div>
        </div>
    )
}

export default DarkMode