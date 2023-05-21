import { countryPageProps } from './countryPage.props';
import styles from './countryPage.module.css';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export const CountryPageCard = ({
   name,
   population,
   region,
   capital,
   image,
   subRegion,
   currencies,
   languages,
   borders,
   nativeName,
   topLevelDomain,
}: countryPageProps): JSX.Element => {
   const { lightMode } = useContext(AppContext);

   const primaryBackgroundColor = lightMode === true ? 'var(--very-light-grey)' : 'var(--very-dark-blue)';
   const textColor = lightMode === true ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)';
   const secondaryBackgroundColor = lightMode === true ? 'var(--white)' : 'var(--dark-blue)';

   return (
      <div className={styles.container} style={{ backgroundColor: `${primaryBackgroundColor}`, color: `${textColor}` }}>
         <div className={styles.flag}>
            <img src={image} />
         </div>
         <div className={styles.infoContainer}>
            <h1>{name}</h1>
            <div className={styles.info}>
               <div className={styles.infoleft}>
                  <a>Native Name: {nativeName}</a>
                  <a>
                     Population:
                     {population > 1000000 ? Math.round((population / 1000000) * 100) / 100 + 'm' : population}
                  </a>
                  <a>Region: {region}</a>
                  <a>Sub Region: {subRegion}</a>
                  <a>Capital: {capital}</a>
               </div>
               <div className={styles.inforight}>
                  <div>Top Level Domain: {topLevelDomain}</div>
                  <div>
                     Currencies:{' '}
                     {currencies?.map((e) => (
                        <a>{e.name}</a>
                     ))}
                  </div>
                  <div>
                     Languages:{' '}
                     {languages?.map((e) => (
                        <a>{e.name} </a>
                     ))}
                  </div>
               </div>
            </div>
            <div className={styles.border}>
               Border Countries:{' '}
               {borders ? (
                  borders.map((e) => (
                     <div
                        style={{ backgroundColor: `${secondaryBackgroundColor}`, color: `${textColor}` }}
                        className={styles.borderBox}
                     >
                        {e}
                     </div>
                  ))
               ) : (
                  <div
                     style={{ backgroundColor: `${secondaryBackgroundColor}`, color: `${textColor}` }}
                     className={styles.borderBox}
                  >
                     {' '}
                     None
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};
