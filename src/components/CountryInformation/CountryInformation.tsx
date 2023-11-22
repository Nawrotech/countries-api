import style from "./CountryInformation.module.css";

type Props = {
  informationName: string;
  information: string;
};

export const CountryInformation = ({ informationName, information }: Props) => {
  return (
    <p className={style.countryInfo}>
      <span className={style.countryInfo__header}>{informationName}:</span>
      &nbsp;
      <span>{information}</span>
    </p>
  );
};
