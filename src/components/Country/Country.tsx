import { TCountryPreview } from "../../types/countriesTypes";
import style from "./Country.module.css";
import { useNavigate } from "react-router-dom";
type Props = {
  country: TCountryPreview;
};

export const Country = ({ country }: Props) => {
  const { name, population, region, capital, flags } = country;

  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/${name.common}`)}
      className={`${style.countryCard} borr shadow`}
    >
      <img
        className={style.countryCard__flag}
        src={flags.png}
        alt={flags.alt}
      />
      <div className={style.countryCard__generalInfo}>
        <h2 className={style.countryCard__countryName}>{name.common}</h2>
        <div className={style.countryCard__informationContainer}>
          <p className={style.countryCard__information}>
            Population:&nbsp;
            <span>{population.toLocaleString()}</span>
          </p>
          <p className={style.countryCard__information}>
            Region:&nbsp;<span>{region}</span>
          </p>
          <p className={style.countryCard__information}>
            Capital:&nbsp;<span>{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
