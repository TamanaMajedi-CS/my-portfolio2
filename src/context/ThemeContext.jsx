import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();
export const useTheme = () => useContext(ThemeContext);

const THEMES = ["dark","light","ocean"];

export function ThemeProvider({ children }){
  const [theme, setTheme] = useState(()=>localStorage.getItem("theme") || "dark");
  useEffect(()=>{
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  },[theme]);
  const cycleTheme = () => {
    const idx = THEMES.indexOf(theme);
    setTheme(THEMES[(idx+1)%THEMES.length]);
  };
  return <ThemeContext.Provider value={{theme, setTheme, cycleTheme}}>{children}</ThemeContext.Provider>;
}
