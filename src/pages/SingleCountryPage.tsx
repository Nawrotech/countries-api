import { useParams, useNavigate } from "react-router-dom";
import { TCountryDetails } from "../types/countriesTypes";
import { useEffect, useState } from "react";

type Props = {
  countries: TCountryDetails[];
};

export const SingleCountryPage = ({ countries }: Props) => {
  const { country } = useParams();
  const navigate = useNavigate();

  const singleCountry: TCountryDetails | undefined = countries?.find(
    (el) => el?.name?.common === country
  );

  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = singleCountry as TCountryDetails;

  useEffect(() => {
    console.log();
  }, []);

  return (
    <div className="countryDetailsCardContainer">
      <div className="container">
        <button onClick={() => navigate(-1)} className={`shadow`}>
          &larr; Back
        </button>
        <div className="countryDetailsCard">
          <img src={flags.png} alt={flags.alt} />
          <h2>{name.common}</h2>
          <div className="countryInfoWrapper">
            <p>
              Native Name:{" "}
              <span>{Object.values(name.nativeName).slice(-1)[0].common}</span>
            </p>
            <p>
              Population: <span>{population}</span>
            </p>
            <p>
              Region: <span>{region}</span>
            </p>
            <p>
              Sub Region: <span>{subregion}</span>
            </p>
            <p>
              Capital: <span>{capital}</span>
            </p>
          </div>
          <div className="countryInfoWrapper">
            <p>
              Top Level Domain: <span>{tld[0]}</span>
            </p>
            <p>
              Currencies: <span>{Object.values(currencies)[0].name}</span>
            </p>
            <p>
              {Object.values(languages).length > 1 ? "Languages" : "Language"}
              :&nbsp;
              <span>{Object.values(languages).join(", ")}</span>
            </p>
          </div>
          <div className="borderContainer">
            <h2>Border Countries:</h2>
            {borders.map((border) => {
              const countryFullName = countries?.find(
                (country) => country?.cca3 === border
              )?.name?.common;

              return <p key={border}>{countryFullName}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
