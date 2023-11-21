import { Country } from "../../components/Country/Country";
import { InputField } from "../../components/InputField/InputField";
import { Select } from "../../components/Select/Select";
import { useState } from "react";
import { TCountryPreview } from "../../types/countriesTypes";

import style from "./CountriesPage.module.css";

type Props = {
  countries: TCountryPreview[];
  setFilterBy: React.Dispatch<React.SetStateAction<string>>;
};

export const CountriesPage = ({ countries, setFilterBy }: Props) => {
  const [countryName, setCountryName] = useState("");

  let filteredCountries = countries;
  if (countryName)
    filteredCountries = countries.filter((el) =>
      el.name.common.toLowerCase().includes(countryName)
    );

  return (
    <main>
      <div className="container">
        <div className={style.filteringElements}>
          <InputField setCountryName={setCountryName} />
          <Select setFilterBy={setFilterBy} />
        </div>
        <div className={style.countriesDisplayContainer}>
          {filteredCountries?.map((country: TCountryPreview) => (
            <Country key={country?.name?.common} country={country} />
          ))}
        </div>
      </div>
    </main>
  );
};
