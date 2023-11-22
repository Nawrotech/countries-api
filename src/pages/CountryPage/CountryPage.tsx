import { useParams, useNavigate } from "react-router-dom";
import { TCountryDetails } from "../../types/countriesTypes";
import { CountryInformation } from "../../components/CountryInformation/CountryInformation";
import { BiArrowBack } from "react-icons/bi";
import style from "./CountryPage.module.css";

type Props = {
  countries: TCountryDetails[];
  darkMode: boolean;
};

export const CountryPage = ({ countries, darkMode }: Props) => {
  const { country } = useParams();
  const navigate = useNavigate();

  const singleCountry: TCountryDetails | never[] =
    countries?.find((el) => el?.name?.common === country) || [];

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

  const nativeName =
    name && Object.values(name?.nativeName)?.slice(-1)[0]?.common;

  const currencyName = currencies && Object.values(currencies)[0].name;

  const langs = languages && Object.values(languages);

  const bordersFullNames =
    borders &&
    borders.map((border) => {
      const countryFullName = countries?.find(
        (country) => country?.cca3 === border
      )?.name?.common;

      return countryFullName;
    });

  return (
    <div className={style.countryDetailsCard}>
      <div className="container">
        <button
          onClick={() => navigate(-1)}
          className={`${style.backBtn} ${darkMode ? "darkMode" : ""} shadow`}
        >
          <BiArrowBack />
          Back
        </button>
        <div className={style.countryDetailsCard__container}>
          {/* <div className="img-container"> */}
          <img
            className={`${style.flag} shadow`}
            src={flags?.svg}
            alt={flags?.alt}
          />
          {/* </div> */}

          <div className={style.countryDetailsCard__content}>
            <h2 className={style.countryName}>{name?.common}</h2>
            <div className={`${style.countryInfoGroup} spacing`}>
              <CountryInformation
                informationName="Native Name"
                information={nativeName}
              />
              <CountryInformation
                informationName="Population"
                information={population?.toLocaleString()}
              />
              <CountryInformation
                informationName="Region"
                information={region}
              />
              <CountryInformation
                informationName="Sub Region"
                information={subregion}
              />
              <CountryInformation
                informationName="Capital"
                information={capital}
              />
            </div>
            <div className={`${style.countryInfoGroup} spacing`}>
              <CountryInformation
                informationName="Top Level Domain"
                information={tld?.[0]}
              />
              <CountryInformation
                informationName="Currencies"
                information={currencyName}
              />
              <CountryInformation
                informationName={langs?.length > 1 ? "Languages" : "Language"}
                information={langs?.join(", ")}
              />
            </div>
            {bordersFullNames.length ? (
              <div className={style.borders}>
                <h3 className={style.borders__header}>Border Countries:</h3>
                <div className={style.bordersContainer}>
                  {bordersFullNames?.map((border, i) => (
                    <p
                      onClick={() => navigate(`/${bordersFullNames[i]}`)}
                      className={`${style.border} ${
                        darkMode ? "darkMode" : ""
                      } shadow`}
                      key={border}
                    >
                      {border}
                    </p>
                  ))}
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
