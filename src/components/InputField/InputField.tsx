import { IoIosSearch } from "react-icons/io";
import style from "./InputField.module.css";

type Props = {
  setCountryName: React.Dispatch<React.SetStateAction<string>>;
};

export const InputField = ({ setCountryName }: Props) => {
  return (
    <div className={style.inputSearchCountryContainer}>
      <input
        className="borr shadow"
        type="text"
        placeholder="Search for a country..."
        onChange={(e) =>
          setCountryName(
            e.target.value.toLowerCase()
            // e.target.value.slice(0, 1).toUpperCase() + e.target.value.slice(1)
          )
        }
      />
      <IoIosSearch className={style.icon} />
    </div>
  );
};
