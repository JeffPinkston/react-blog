import React from 'react';
import styles from './Toggle.module.css'

const Toggle = ({ darkMode, setDarkMode }) => (
    <div className={styles.Toggle}>
        <div className="dark-mode-toggle">
            <button type="button" onClick={() => setDarkMode(false)}>
            ☀
            </button>
            <span className="toggle-control">
            <input
                className="dmcheck"
                id="dmcheck"
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
            />
            <label htmlFor="dmcheck" />
            </span>
            <button type="button" onClick={() => setDarkMode(true)}>
            ☾
            </button>
        </div>
    </div>
);

export default Toggle;
