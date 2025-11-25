import { createContext, useContext } from "react"

// Not necessarily we have to pass state values and state methods only in the context, we can pass any values and any functions too 
export const ThemeContext = createContext({
    themeMode: "light",
    // We just declare the function here, the main functionality is written in the APP.jsx file
    toggleCurrentTheme: () => {}
})

// We'll use the provider ultimately, so passing data to Context here through the Provider
export const ThemeProvider = ThemeContext.Provider

// custom hook for the context, which is usually used
export default function useTheme(){
    return useContext(ThemeContext)
}