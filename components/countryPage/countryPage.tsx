import { countryPageProps } from "./countryPage.props"
import styles from "./countryPage.module.css"


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
        nativeName,
        topLevelDomain,}:countryPageProps):JSX.Element => {

    return(
        <div className={styles.container}>
            <div className={styles.flag}>
                <img src={image} />
            </div>
            <div className={styles.infoContainer}>
                <h1>{name}</h1>
                <div className={styles.info}>
                    <div className={styles.infoleft}>
                        <a>Native Name: {nativeName}</a>
                        <a>Population: {population}</a>
                        <a>Region: {region}</a>
                        <a>Sub Region: {subRegion}</a>
                        <a>Capital: {capital}</a>
                    </div>
                    <div className={styles.inforight}>
                        <div>Top Level Domain: {topLevelDomain}</div>
                        <div>Currencies: {currencies.map((e)=><a>{e.name}</a>)}</div>
                        <div>Languages: {languages.map((e)=><a>{e.name}</a>)}</div>
                    </div>
                </div>
                <div className={styles.border}>
                    Border Countries: {borders.map((e)=><div className={styles.borderBox}>{e}</div>)}
                </div>
            </div>
        </div>
    )
}