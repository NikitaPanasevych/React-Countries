import { HeaderProps } from './header.props';
import styles from './header.module.css';
import cn from 'classnames';
import { AppContext } from '../../context/app.context';
import { useContext } from 'react';

export const Header = ({ children, className, ...props }: HeaderProps): JSX.Element => {
   const { lightMode } = useContext(AppContext);

   let textColor = lightMode === true ? 'hsl(200, 15%, 8%)' : 'hsl(0, 0%, 100%)';
   let backgroundColor = lightMode === true ? 'var(--white)' : 'var(--dark-blue)';

   return (
      <header
         style={{ backgroundColor: `${backgroundColor}`, color: `${textColor}` }}
         className={cn(className, styles.header, styles.boxShadow)}
         {...props}
      >
         {children}
      </header>
   );
};
