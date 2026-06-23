"use client";

import { createContext, useState, useRef, useEffect } from "react";

export const TimerContext = createContext();

/**
 * Contexte qui gère le temps.
 * 
 * Attention, "endFunction" doit être fournie par le composant parent pour déclencher une action à la fin du timer.
 */
export default function TimerProvider({ endFunction, children }) {

    const [totalSeconds, setTotalSeconds] = useState(3);
    const [secondsLeft, setSecondsLeft] = useState(3);

    const intervalRef = useRef(null);

    const start = () => {
        if (intervalRef.current) return;

        intervalRef.current = setInterval(() => {
            setSecondsLeft(prev => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current);
                    intervalRef.current = null;
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    /**
     * useEffect qui se déclenchera en cas de modification de "secondsLeft"
     */
    useEffect(() => {
        // appel de la fonction de fin fournie par le composant parent
        if (secondsLeft < 1) {
            endFunction();
        }
    }, [secondsLeft]);

    const pause = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    const setDuration = (sec) => {
        pause();
        setTotalSeconds(sec);
        setSecondsLeft(sec);
    };

    const reset = () => {
        pause();
        setSecondsLeft(totalSeconds);
    };

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);

    return (
        <TimerContext.Provider value={{
            secondsLeft,
            start,
            pause,
            reset,
            setDuration
        }}>
            {children}
        </TimerContext.Provider>
    );
}