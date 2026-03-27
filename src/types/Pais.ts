export type Pais = {
    tld: string[],
    capital: string[],
    region: string,
    subregion: string,

    population: number
    name: {
      common: string
      official: string
    },
    currencies: {
      PEN: {
        name: string
      }
    },
    languages: unknown,

    flags: {
      png: string,
    }
}