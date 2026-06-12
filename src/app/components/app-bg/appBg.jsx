"use client";

import { DarkModeContext } from "../../context/DarkModeProvider";
import { useContext } from "react";

import DarkModeButton from "../dark-mode-button/darkModeButton";

import styles from "./appBg.module.css"

function Background() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);

    function handleToggleThemeClick() {
        toggleDarkMode()
    }

    return (
        <div className={darkMode ? `${styles.app} ${styles.appDark}` : `${styles.app} ${styles.appLight}`}>
            <DarkModeButton />
        </div>
    )
}

export default Background;