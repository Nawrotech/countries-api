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
      console.log(data);

      // const formattedData = data.map((country: TCountryDetails) => {
      //   return {
      //     ...country,

      //     currencies:
      //       country.currencies[
      //         Object?.getOwnPropertyNames(country?.currencies)[0]
      //       ]?.name,

      //     languages: Object?.keys(country?.languages).map(
      //       (lang) => country.languages[lang]
      //     ),

      //     name: {
      //       ...country.name,
      //       nativeName: Object?.keys(country?.name?.nativeName).map(
      //         (langCode) => country?.name?.nativeName[langCode]
      //       ),
      //     },
      //   };
      // });
      // console.log(formattedData);
      setCountries(data);
    }
    getCountries();
  }, [filterBy]);

  return { countries };
};
