import style from "./Navigation.module.css";
import { FaMoon, FaRegMoon } from "react-icons/fa";
export const Navigation = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.wrapper}>
          <h1 className={style.header__heading}>Where in the world?</h1>
          <button className={style.header__darkModeButton}>
            <FaRegMoon /> <span>Dark Mode</span>
          </button>
        </div>
      </div>
    </header>
  );
};
