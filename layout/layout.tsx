import { LayoutProps } from "./layout.props"
import styles from "./layout.module.css"
import { FunctionComponent } from "react"
import { Header } from "./header/header"
import { Body } from "./body/body"
import { Filter } from "./filter/filter"
import { Card } from "../components/countryCard/countryCard"



const Layout = ({children}:LayoutProps): JSX.Element => {
    return(
        <div className={styles.wrapper}>
            <Header className={styles.header}>
                <div>WHERE IS THE WORLD?</div>
                <div>Dark Mode</div>
            </Header>
            <Filter className={styles.filter}>
                Filter
            </Filter>
            <Body className={styles.body}>
                <Card
                    name="Colombia"
                    population={48759958}
                    capital="Bogotá"
                    region="South America"
                    image="https://qph.cf2.quoracdn.net/main-qimg-f5a2a1ed73e69d23520161d4fc5c4248"
                />
            </Body>
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element{
        return(
            <>
                <Layout>
                    <Component {...props} />
                </Layout>
            </>
        )
    }
}