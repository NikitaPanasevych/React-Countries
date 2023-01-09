import { countryPageCardProps } from "./countryPageCart.props"


export const CountryPageCard = (
    {   name,
        population,
        region,
        capital,
        image,
        subRegion,
        currencies,
        languages,
        borders,
        nativeName,}:countryPageCardProps):JSX.Element => {

    return(
        <>
            <span>{name}</span>
            <span>{population}</span>
            <span>{region}</span>
            <span>{capital}</span>
            <img src={image} />
            <span>{subRegion}</span>
            {currencies.map((e)=><span>{e.name}</span>)}
            {languages.map((e)=><span>{e.name}</span>)}
            {borders.map((e)=><span>{e}</span>)}
            <span>{nativeName}</span>
        </>
    )
}