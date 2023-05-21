import { CardProps } from './countryCard.props';
import styles from './countryCard.module.css';
import { AppContext } from '../../context/app.context';
import { useContext } from 'react';

export const Card = ({ name, population, region, capital, image }: CardProps): JSX.Element => {
   const { lightMode } = useContext(AppContext);

   let textColor = lightMode === true ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)';
   let backgroundColor = lightMode === true ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)';

   return (
      <div className={styles.container} style={{ backgroundColor: `${backgroundColor}`, color: `${textColor}` }}>
         <img className={styles.image} src={image} />
         <span className={styles.name}>Name: {name}</span>
         <span className={styles.population}>Population: {population}</span>
         <span className={styles.region}>Region: {region}</span>
         <span className={styles.region}>Capital: {capital}</span>
      </div>
   );
};
