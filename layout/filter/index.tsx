import { FilterProps } from './filter.props';
import styles from './filter.module.css';
import cn from 'classnames';

export const Filter = ({ children, className, ...props }: FilterProps): JSX.Element => {
   return (
      <header className={cn(className, styles.filter)} {...props}>
         {children}
      </header>
   );
};
