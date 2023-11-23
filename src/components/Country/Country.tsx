import { TCountryPreview } from "../../types/countriesTypes";
import style from "./Country.module.css";
import { useNavigate } from "react-router-dom";
import { CountryInformation } from "../CountryInformation/CountryInformation";

type Props = {
  country: TCountryPreview;
  darkMode: boolean;
};

export const Country = ({ country, darkMode }: Props) => {
  const { name, population, region, capital, flags } = country;

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${name.common}`)}
      className={`${style.countryCard} ${
        darkMode ? "darkMode" : ""
      } borr shadow`}
    >
      <img
        className={style.countryCard__flag}
        src={flags.png}
        alt={flags.alt}
      />
      <div className={style.countryCard__generalInfo}>
        <h2 className={style.countryCard__countryName}>{name.common}</h2>
        <div className={style.countryCard__informationContainer}>
          <CountryInformation
            informationName="Popluation"
            information={population.toLocaleString()}
          />
          <CountryInformation informationName="Region" information={region} />
          <CountryInformation informationName="Capital" information={capital} />
        </div>
      </div>
    </div>
  );
};
