import { HeaderProps } from "./header.props";
import styles from "./header.module.css";
import cn from "classnames";



export const Header = ({children, className, ...props}:HeaderProps): JSX.Element => {
    return(
        <header className={cn(className, styles.header)} {...props}>
            {children}
        </header>
    )
}

