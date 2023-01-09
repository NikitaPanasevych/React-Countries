import { LayoutProps } from "./layout.props";
import styles from "./layout.module.css";
import { FunctionComponent, useContext } from "react";
import { Header } from "../header/header";
import { Body } from "../body/body";
import { Filter } from "../filter/filter";
import { AppContext } from "../../context/app.context";
import Link from "next/link";


const CPageLayout = ({children}:LayoutProps): JSX.Element => {

    const { lightMode, setMode } = useContext(AppContext);

    return(
        <div className={styles.wrapper}>
            <Header className={styles.header}>
                <div>Where in the world?</div>
                <div onClick={()=>setMode((prev)=>!prev)}>{lightMode === true? "Light Mode" : "Dark Mode"}</div>
            </Header>
            <Filter className={styles.filter}>
                <Link href="/">BACK</Link>
            </Filter>
            <Body className={styles.body}>
                {children}
            </Body>
        </div>
    )
}

export const withCPageLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element{
        return(
                <CPageLayout>
                    <Component {...props} />
                </CPageLayout>
        )
    }
}