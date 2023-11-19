import { TCountryPreview } from "../types/countriesTypes";

type Props = {
  country: TCountryPreview;
};

export const Country = ({ country }: Props) => {
  const { name, population, region, capital, flags } = country;

  return (
    <div className="country-card borr shadow">
      <img className="country-card__flag" src={flags.png} alt={flags.alt} />
      <div className="country-card__general-info">
        <h2 className="country-card__country-name">{name.common}</h2>
        <div className="country-card__information-container">
          <p className="country-card__information">
            Population:&nbsp;
            <span className="data">{population.toLocaleString()}</span>
          </p>
          <p className="country-card__information">
            Region:&nbsp;<span>{region}</span>
          </p>
          <p className="country-card__information">
            Capital:&nbsp;<span>{capital}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
