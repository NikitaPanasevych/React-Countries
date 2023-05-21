import { LayoutProps } from './layout.props';
import styles from './layout.module.css';
import { FunctionComponent, useContext } from 'react';
import { Header } from '../header';
import { Body } from '../body';
import { Filter } from '../filter';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AppContext } from '../../context/app.context';
import Link from 'next/link';

const CPageLayout = ({ children }: LayoutProps): JSX.Element => {
   const { lightMode, setMode } = useContext(AppContext);

   const primaryBackgroundColor = lightMode === true ? 'var(--very-light-grey)' : 'var(--very-dark-blue)';
   const textColor = lightMode === true ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)';

   return (
      <div className={styles.wrapper} style={{ backgroundColor: `${primaryBackgroundColor}`, color: `${textColor}` }}>
         <Header className={styles.header}>
            <div>Where in the world?</div>
            <div onClick={() => setMode?.(!lightMode)}>{lightMode === true ? 'Light Mode' : 'Dark Mode'}</div>
         </Header>
         <Filter className={styles.filter}>
            <div className={styles.backLink}>
               <Link className={styles.link} href="/">
                  <p className={styles.linkContent}>
                     <AiOutlineArrowLeft />
                     Go Back
                  </p>
               </Link>
            </div>
         </Filter>
         <Body className={styles.body}>{children}</Body>
      </div>
   );
};

export const withCPageLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
   return function withLayoutComponent(props: T): JSX.Element {
      return (
         <CPageLayout>
            <Component {...props} />
         </CPageLayout>
      );
   };
};
