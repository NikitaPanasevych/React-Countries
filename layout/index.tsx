import { LayoutProps } from './layout.props';
import styles from './layout.module.css';
import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { Header } from './header';
import { Body } from './body';
import { Filter } from './filter';
import Loader from '../components/loader';

import { IoFilterSharp } from 'react-icons/io5';
import { BsSearch } from 'react-icons/bs';

import { AppContext } from '../context/app.context';
import { MdNightlightRound } from 'react-icons/md';
import { useRouter } from 'next/router';

const Layout = ({ children }: LayoutProps): JSX.Element => {
   const regions: string[] = ['Europe', 'Asia', 'Americas', 'Oceania', 'Africa', 'World'];

   const [dropdown, setDropdown] = useState<boolean>(false);
   const [loading, setLoading] = useState<boolean>(false);

   const router = useRouter();

   const { region, setRegion, search, setSearch, lightMode, setMode } = useContext(AppContext);

   const primaryBackgroundColor = lightMode === true ? 'var(--very-light-grey)' : 'var(--very-dark-blue)';
   const textColor = lightMode === true ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)';
   const secondaryBackgroundColor = lightMode === true ? 'var(--white)' : 'var(--dark-blue)';

   const handleRouteChange = () => {
      setLoading(true);
   };

   const handleRouteComplete = () => {
      setLoading(false);
   };

   useEffect(() => {
      router.events.on('routeChangeStart', handleRouteChange);
      router.events.on('routeChangeComplete', handleRouteComplete);
      return () => {
         router.events.off('routeChangeStart', handleRouteChange);
         router.events.off('routeChangeComplete', handleRouteComplete);
      };
   }, []);

   return (
      <>
         {loading ? <Loader loading={loading} /> : null}
         <div
            className={styles.wrapper}
            style={{ backgroundColor: `${primaryBackgroundColor}`, color: `${textColor}` }}
         >
            <Header className={styles.header}>
               <div>Where in the world?</div>
               <div className={styles.themeSwitcher} onClick={() => setMode?.(!lightMode)}>
                  <MdNightlightRound />
                  {lightMode === true ? 'Dark Mode' : 'Light Mode'}
               </div>
            </Header>
            <Filter className={styles.filter}>
               <div
                  className={styles.searchbox}
                  style={{ backgroundColor: `${secondaryBackgroundColor}`, color: `${textColor}` }}
               >
                  <BsSearch />
                  <input
                     placeholder="Search for a country..."
                     onChange={(event) => setSearch?.(event.target.value)}
                  ></input>
               </div>
               <div
                  style={{ backgroundColor: `${secondaryBackgroundColor}`, color: `${textColor}` }}
                  className={styles.dropdown}
                  onClick={() => setDropdown((prev) => !prev)}
               >
                  <span className={styles.regionFilter}>
                     <IoFilterSharp />
                     {region}
                  </span>
                  {dropdown ? (
                     <div className={styles.dropdown_content}>
                        {regions.map((e: string, index: number) => (
                           <p key={index} onClick={() => setRegion?.(e)}>
                              {e}
                           </p>
                        ))}
                     </div>
                  ) : null}
               </div>
            </Filter>
            <Body className={styles.body}>{children}</Body>
         </div>
      </>
   );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
   return function withLayoutComponent(props: T): JSX.Element {
      return (
         <Layout>
            <Component {...props} />
         </Layout>
      );
   };
};
