export type TCountryPreview = {
  name: {
    common: string;
    official: string;
    nativeName: Record<
      string,
      {
        official: string;
        common: string;
      }
    >;
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

export type TCountryDetails = TCountryPreview & {
  subregion: string;
  borders: string[];
  currencies: Record<string, { name: string; symbol: string }>;
  languages: {
    [key: string]: string;
  };
  tld: string[];
  cca3: string;
};
