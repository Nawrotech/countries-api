import { Country } from "../components/Country";
import { InputField } from "../components/InputField";
import { Select } from "../components/Select";
import { useEffect, useState } from "react";
import { TCountryPreview } from "../types/countriesTypes";

export const CountriesPage = () => {
  const [countries, setCountries] = useState<TCountryPreview[] | []>([]);

  const [region, setRegion] = useState("europe");

  const [filterBy, setFilterBy] = useState("all");

  let filteredCountries = countries.filter((el) => el.region === region);

  if (region === "") filteredCountries = countries;

  useEffect(() => {
    console.log(region);

    async function getCountries() {
      const res = await fetch(
        `https://restcountries.com/v3.1/${
          filterBy ? filterBy : "all"
        }?fields=name,flags,population,region,capital,subregion,borders,tld,currencies,languages`
      );
      const data = await res.json();
      setCountries(data);
      console.log(data);
    }

    getCountries();
  }, [filterBy, region]);

  return (
    <main>
      <div className="container">
        <div className="filtering-elements">
          <InputField countries={countries} setFilterBy={setFilterBy} />
          <Select setRegion={setRegion} />
        </div>
        <div className="countries-display-container">
          {filteredCountries?.map((country: TCountryPreview) => (
            <Country key={country?.name?.common} country={country} />
          ))}
        </div>
      </div>
    </main>
  );
};
