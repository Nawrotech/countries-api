import { Country } from "../../components/Country/Country";
import { InputField } from "../../components/InputField/InputField";
import { Select } from "../../components/Select/Select";
import { useState } from "react";
import { TCountryPreview } from "../../types/countriesTypes";

import style from "./CountriesPage.module.css";

type Props = {
  countries: TCountryPreview[];
  setFilterBy: React.Dispatch<React.SetStateAction<string>>;
  darkMode: boolean;
};

export const CountriesPage = ({ countries, setFilterBy, darkMode }: Props) => {
  const [countryName, setCountryName] = useState("");

  let filteredCountries = countries;
  if (countryName)
    filteredCountries = countries.filter((el) =>
      el.name.common.toLowerCase().includes(countryName)
    );

  return (
    <div className="container">
      <div
        className={`${style.filteringElements} ${
          darkMode ? style.darkMode : ""
        }`}
      >
        <InputField setCountryName={setCountryName} />
        <Select setFilterBy={setFilterBy} />
      </div>
      <div className={style.countriesDisplayContainer}>
        {filteredCountries?.map((country: TCountryPreview) => (
          <Country
            darkMode={darkMode}
            key={country?.name?.common}
            country={country}
          />
        ))}
      </div>
    </div>
  );
};
