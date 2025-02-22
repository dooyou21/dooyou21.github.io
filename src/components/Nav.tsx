import { NavLink } from "react-router";

const defualtNavStyle = 'font-bold transition-colors text-blue-950 dark:text-blue-50';

export function Nav() {

  return (
    <nav>
      <NavLink to="/links" className={({ isActive }) => isActive ? `${defualtNavStyle} text-blue-700 dark:text-blue-300` : defualtNavStyle} end>
        Links
      </NavLink>
      <NavLink to="/resume" className={({ isActive }) => isActive ? `${defualtNavStyle} text-blue-700 dark:text-blue-300` : defualtNavStyle} end>
        Resume
      </NavLink>
    </nav >
  );
}
