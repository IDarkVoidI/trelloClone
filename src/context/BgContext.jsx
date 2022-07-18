import React, { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const BgContext = createContext({ bg: '', setBg: undefined });
const BgProvider = ({ children }) => {
    const [bg, setBg] = useState('')
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            setBg('')
        }
    }, [location.pathname])
    return (
        <BgContext.Provider value={{ bg, setBg }}>{children}</BgContext.Provider>
    )
}
export default BgProvider;