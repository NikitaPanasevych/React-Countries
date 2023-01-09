import { Currency, Language } from "../../interfaces/data.interface";

export interface countryPageCardProps {
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
}