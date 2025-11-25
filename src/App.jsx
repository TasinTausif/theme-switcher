import { useEffect, useState } from "react";
import ThemeBtn from "./Components/ThemeBtn";
import ThemeCard from "./Components/ThemeCard";
import { ThemeProvider } from "./context/theme";

export default function App() {
  const [themeMode, setThemeMode] = useState('light')

  // Function declared in the Context, functionality is written here
  const toggleCurrentTheme = () => setThemeMode(prev => (prev === "light" ? "dark" : "light"))

  // Actual theme change
  useEffect(() => {
    const currentMode = document.querySelector('html')
    currentMode.classList.remove("light", "dark")
    currentMode.classList.add(themeMode)
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, toggleCurrentTheme}}>
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
