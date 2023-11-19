export type TCountryPreview = {
  name: {
    common: string;
    official: string;
  };
  population: number;
  region: string;
  capital: string;
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
};

type TCountry = {
  subregion: string;

  borders: string[];
  currencies: {
    name: string;
    symbol: string;
  };
  flags: {
    png: string;
  };
};
