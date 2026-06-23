"use client";

import { createContext, useState, useRef, useEffect } from "react";

export const TimerContext = createContext();

export default function TimerProvider({ children }) {

    const [totalSeconds, setTotalSeconds] = useState(1800);
    const [secondsLeft, setSecondsLeft] = useState(1800);

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