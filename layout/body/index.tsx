import JSXStyle from "styled-jsx/style";
import { BodyProps } from "./body.props";
import styles from "./body.module.css";
import cn from "classnames"



export const Body = ({children, className, ...props}: BodyProps): JSX.Element =>{
    return(
        <div className={cn(className, styles.body)} {...props}>
            {children}
        </div>
    )
}