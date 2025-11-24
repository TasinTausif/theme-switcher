import { useEffect, useState } from "react";
import ThemeBtn from "./Components/ThemeBtn";
import ThemeCard from "./Components/ThemeCard";
import { ThemeProvider } from "./context/theme";

export default function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => setThemeMode("light")
  const darkTheme  = () => setThemeMode("dark")

  const currentMode = document.querySelector('html')
  // Actual theme change
  useEffect(() => {
    currentMode.classList.remove("light", "dark")
    currentMode.classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <ThemeCard />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
