import style from "./Select.module.css";

type Props = {
  setFilterBy: React.Dispatch<React.SetStateAction<string>>;
};

export const Select = ({ setFilterBy }: Props) => {
  return (
    <div className="region">
      <select
        onChange={(e) => setFilterBy(e.target.value)}
        className={`${style.region__select} shadow borr`}
      >
        <option style={{ fontFamily: "Nunito sans" }} value="all">
          Filter by Region
        </option>
        <option value="region/africa">Africa</option>
        <option value="region/americas">Americas</option>
        <option value="region/asia">Asia</option>
        <option value="region/europe">Europe</option>
        <option value="region/oceania">Oceania</option>
      </select>
    </div>
  );
};
