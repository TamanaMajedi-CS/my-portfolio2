
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle.jsx";

export default function Navbar(){
  return (
    <nav className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand">Tamana Majedi</NavLink>
        <div className="spacer" />
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <ThemeToggle />
      </div>
    </nav>
  );
}
