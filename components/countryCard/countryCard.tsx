import { CardProps } from "./countryCard.props"
import styles from "./countryCard.module.css"



export const Card = ({ name, population, region, capital, image }:CardProps):JSX.Element => {
    return(
        <div className={styles.container}> 
            <img className={styles.image} src={image} />
            <span className={styles.name}>Name: {name}</span>
            <span className={styles.population}>Population: {population}</span>
            <span className={styles.region}>Region: {region}</span>
            <span className={styles.region}>Capital: {capital}</span>
        </div>
    )
}