import style from "./Navigation.module.css";
import { FaMoon, FaRegMoon } from "react-icons/fa";

export const Navigation = ({ darkMode, setDarkMode }) => {
  return (
    <header className={`${style.header} ${darkMode ? "darkMode" : ""}`}>
      <div className="container">
        <div className={style.wrapper}>
          <h1 className={style.header__heading}>Where in the world?</h1>
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className={style.header__darkModeButton}
          >
            {darkMode ? <FaMoon /> : <FaRegMoon />}
            <span>Dark Mode</span>
          </button>
        </div>
      </div>
    </header>
  );
};
