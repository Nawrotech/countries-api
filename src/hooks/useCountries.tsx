import { useEffect, useState } from "react";
import { TCountryPreview } from "../types/countriesTypes";

export const useCountries = (filterBy: string) => {
  const [countries, setCountries] = useState<TCountryPreview[] | []>([]);

  useEffect(() => {
    async function getCountries() {
      const res = await fetch(
        `https://restcountries.com/v3.1/${filterBy}?fields=name,flags,population,region,capital,subregion,borders,tld,currencies,languages`
      );
      const data = await res.json();
      setCountries(data);
    }
    getCountries();
  }, [filterBy]);

  return { countries };
};
