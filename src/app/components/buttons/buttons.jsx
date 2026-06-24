"use client";

import { DarkModeContext } from "../../context/DarkModeProvider";
import { useContext } from "react";
import { TimerContext } from "@/app/context/TimerProvider";

import styles from "./buttons.module.css"

function Buttons({ alarmOn, stopSound }) {
    const { darkMode } = useContext(DarkModeContext);
    const { start, pause, reset, setDuration } = useContext(TimerContext);

    if (alarmOn) {
        return (
            <div className={styles.buttonsDisplay}>
                <div className={styles.buttonsContainer}>
                    <button className={darkMode ? `${styles.button} ${styles.buttonDark}` : `${styles.button} ${styles.buttonLight}`} onClick={stopSound}>
                        <svg className={darkMode ? `${styles.icon} ${styles.iconDark}` : `${styles.icon} ${styles.iconLight}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M5.707 4.293a1 1 0 0 0-1.414 1.414l14 14a1 1 0 0 0 1.414-1.414l-.004-.005C21.57 16.498 22 13.938 22 12a9.972 9.972 0 0 0-2.929-7.071 1 1 0 1 0-1.414 1.414A7.972 7.972 0 0 1 20 12c0 1.752-.403 3.636-1.712 4.873l-1.433-1.433C17.616 14.37 18 13.107 18 12c0-1.678-.69-3.197-1.8-4.285a1 1 0 1 0-1.4 1.428A3.985 3.985 0 0 1 16 12c0 .606-.195 1.335-.59 1.996L13 11.586V6.135c0-1.696-1.978-2.622-3.28-1.536L7.698 6.284l-1.99-1.991ZM4 8h.586L13 16.414v1.451c0 1.696-1.978 2.622-3.28 1.536L5.638 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2Z" />
                        </svg>
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.buttonsDisplay}>
            <div className={styles.buttonsContainer}>
                <div className={darkMode ? `${styles.button} ${styles.buttonDark}` : `${styles.button} ${styles.buttonLight}`}>
                    <p onClick={() => setDuration(600)} className={darkMode ? `${styles.iconText} ${styles.iconTextDark}` : `${styles.iconText} ${styles.iconTextLight}`}>10</p>
                </div>
                <div className={darkMode ? `${styles.button} ${styles.buttonDark}` : `${styles.button} ${styles.buttonLight}`}>
                    <p onClick={() => setDuration(1200)} className={darkMode ? `${styles.iconText} ${styles.iconTextDark}` : `${styles.iconText} ${styles.iconTextLight}`}>20</p>
                </div>
                <div className={darkMode ? `${styles.button} ${styles.buttonDark}` : `${styles.button} ${styles.buttonLight}`}>
                    <p onClick={() => setDuration(1800)} className={darkMode ? `${styles.iconText} ${styles.iconTextDark}` : `${styles.iconText} ${styles.iconTextLight}`}>30</p>
                </div>
            </div>
            <div className={styles.buttonsContainer}>
                <div onClick={start} className={darkMode ? `${styles.button} ${styles.buttonDark}` : `${styles.button} ${styles.buttonLight}`}>
                    <svg className={darkMode ? `${styles.icon} ${styles.iconDark}` : `${styles.icon} ${styles.iconLight}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.4086 9.35258C23.5305 10.5065 23.5305 13.4935 21.4086 14.6474L8.59662 21.6145C6.53435 22.736 4 21.2763 4 18.9671L4 5.0329C4 2.72368 6.53435 1.26402 8.59661 2.38548L21.4086 9.35258Z"></path>
                    </svg>
                </div>
                <div onClick={pause} className={darkMode ? `${styles.button} ${styles.buttonDark}` : `${styles.button} ${styles.buttonLight}`}>
                    <svg className={darkMode ? `${styles.icon} ${styles.iconDark}` : `${styles.icon} ${styles.iconLight}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 6C2 4.11438 2 3.17157 2.58579 2.58579C3.17157 2 4.11438 2 6 2C7.88562 2 8.82843 2 9.41421 2.58579C10 3.17157 10 4.11438 10 6V18C10 19.8856 10 20.8284 9.41421 21.4142C8.82843 22 7.88562 22 6 22C4.11438 22 3.17157 22 2.58579 21.4142C2 20.8284 2 19.8856 2 18V6Z"></path>
                        <path d="M14 6C14 4.11438 14 3.17157 14.5858 2.58579C15.1716 2 16.1144 2 18 2C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V18C22 19.8856 22 20.8284 21.4142 21.4142C20.8284 22 19.8856 22 18 22C16.1144 22 15.1716 22 14.5858 21.4142C14 20.8284 14 19.8856 14 18V6Z"></path>
                    </svg>
                </div>
                <div onClick={reset} className={darkMode ? `${styles.button} ${styles.buttonDark}` : `${styles.button} ${styles.buttonLight}`}>
                    <svg className={darkMode ? `${styles.icon} ${styles.iconDark}` : `${styles.icon} ${styles.iconLight}`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z"></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Buttons;