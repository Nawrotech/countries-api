import { FaMoon, FaRegMoon } from "react-icons/fa";
export const Navigation = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="header__heading">Where in the world?</h1>
        <button className="header__dark-mode-button">
          <FaRegMoon /> <span>Dark Mode</span>
        </button>
      </div>
    </header>
  );
};
