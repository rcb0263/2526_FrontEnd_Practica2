//capital,subregion,name,currencies,languages,flags
export type Pais = {
    capital: string[],
    subregion: string,

    population: number
    name: {
      common: string
      official: string
    },
    currencies: {
        [key: string]: {
            name: string;
            symbol: string;
        };
    }
    languages: {[key: string]: string},

    flags: {
      png: string,
    }
}