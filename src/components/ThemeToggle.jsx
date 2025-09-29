import { useTheme } from "../context/ThemeContext.jsx";
import { FiSun, FiMoon, FiFeather } from "react-icons/fi";

export default function ThemeToggle(){
  const { theme, cycleTheme } = useTheme();
  const icon = theme === "dark" ? <FiMoon aria-hidden /> : theme === "light" ? <FiSun aria-hidden /> : <FiFeather aria-hidden />;
  return (
    <button className="btn ghost" onClick={cycleTheme} aria-label={`Switch theme (current ${theme})`}>
      {icon} <span className="muted" style={{marginLeft:8, fontSize:'.9rem'}}>{theme}</span>
    </button>
  );
}
