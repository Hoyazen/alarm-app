"use client";

import { createContext, useState } from "react";

const DarkModeContext = createContext();

function DarkModeProvider(props) {

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    //value = chaque enfant peut réutiliser ce composant
    return (
        <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
            {props.children}
        </DarkModeContext.Provider>
    )
};

export { DarkModeContext, DarkModeProvider };