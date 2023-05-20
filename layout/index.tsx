import { LayoutProps } from './layout.props';
import styles from './layout.module.css';
import { FunctionComponent, useContext, useState } from 'react';
import { Header } from './header';
import { Body } from './body';
import { Filter } from './filter';

import { IoFilterSharp } from 'react-icons/io5';
import { BsSearch } from 'react-icons/bs';

import { AppContext } from '../context/app.context';
import { MdNightlightRound } from 'react-icons/md';

const Layout = ({ children }: LayoutProps): JSX.Element => {
   const regions: string[] = ['Europe', 'Asia', 'Americas', 'Oceania', 'Africa', 'World'];

   const [dropdown, setDropdown] = useState<boolean>(false);

   const { region, setRegion, search, setSearch, lightMode, setMode } = useContext(AppContext);

   const primaryBackgroundColor = lightMode === true ? 'var(--very-light-grey)' : 'var(--very-dark-blue)';
   const textColor = lightMode === true ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)';
   const secondaryBackgroundColor = lightMode === true ? 'var(--white)' : 'var(--dark-blue)';

   return (
      <div className={styles.wrapper} style={{ backgroundColor: `${primaryBackgroundColor}`, color: `${textColor}` }}>
         <Header className={styles.header}>
            <div>Where in the world?</div>
            <div onClick={() => setMode((prev: boolean) => !prev)}>
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
               <input placeholder="Search for a country..." onChange={(event) => setSearch(event.target.value)}></input>
            </div>
            <div
               style={{ backgroundColor: `${secondaryBackgroundColor}`, color: `${textColor}` }}
               className={styles.dropdown}
               onClick={() => setDropdown((prev) => !prev)}
            >
               <span>
                  <IoFilterSharp />
                  {region}
               </span>
               {dropdown ? (
                  <div className={styles.dropdown_content}>
                     {regions.map((e: string, index: number) => (
                        <p key={index} onClick={() => setRegion(e)}>
                           {e}
                        </p>
                     ))}
                  </div>
               ) : null}
            </div>
         </Filter>
         <Body className={styles.body}>{children}</Body>
      </div>
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
