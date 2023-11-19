import { IoIosSearch } from "react-icons/io";

export const InputField = ({ setFilterBy, countries }) => {
  return (
    <div className="input--search-country-container">
      <input
        className="borr shadow"
        type="text"
        placeholder="Search for a country..."
        onChange={(e) =>
          setFilterBy(countries.length ? `name/${e.target.value}` : "all")
        }
      />
      <IoIosSearch className="icon" />
    </div>
  );
};
