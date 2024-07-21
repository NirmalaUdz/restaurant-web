
import { createContext, useEffect, useRef, useState } from "react"

const themeContext = createContext(null)

const ThemeContextProvider = ({children}) => {
    const [theme, setTheme] = useState("dark")
    const didMount = useRef(false)

    useEffect(() => {
        if(!didMount.current){
            const theme = localStorage.getItem("theme")
            if(theme) setTheme(theme)
            didMount.current = true
        }else{
            localStorage.setItem("theme", theme)
        }
    }, [theme])

    return (
        <themeContext.Provider value={[theme, setTheme]}>
            {children}
        </themeContext.Provider>
    )
}

export {themeContext, ThemeContextProvider}