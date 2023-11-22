import { useEffect, useState } from "react";
import { TCountryDetails } from "../types/countriesTypes";

export const useCountries = (filterBy: string) => {
  const [countries, setCountries] = useState<[] | TCountryDetails[]>([]);

  useEffect(() => {
    async function getCountries() {
      const res = await fetch(
        `https://restcountries.com/v3.1/${filterBy}?fields=name,flags,population,region,capital,subregion,borders,tld,currencies,languages,cca3`
      );
      const data = await res.json();

      setCountries(data);
    }
    getCountries();
  }, [filterBy]);

  return { countries };
};
