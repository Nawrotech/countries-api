import { Outlet } from "react-router-dom";
import { Navigation } from "../components/Navigation/Navigation";

type Props = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppLayout = ({ darkMode, setDarkMode }: Props) => {
  return (
    <>
      <Navigation darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Outlet />
      </main>
    </>
  );
};
