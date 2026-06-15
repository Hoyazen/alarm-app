"use client";

import { DarkModeContext } from "../../context/DarkModeProvider";
import { useContext } from "react";
import styles from "./background.module.css"

function Background() {
    const { darkMode } = useContext(DarkModeContext);

    return (
        <div className={darkMode ? `${styles.background} ${styles.backgroundDark}` : `${styles.background} ${styles.backgroundLight}`} />
    )
}

export default Background;