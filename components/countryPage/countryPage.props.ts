import { Currency, Language } from "../../interfaces/data.interface";

export interface countryPageProps {
    name: string;
    population: number;
    region: string;
    capital: string;
    image: string;
    subRegion: string;
    currencies: Currency[];
    languages: Language[];
    borders: string[];
    nativeName: string;
    topLevelDomain: string[];
}