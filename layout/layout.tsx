import { LayoutProps } from "./layout.props"
import styles from "./layout.module.css"
import { FunctionComponent, useContext, useEffect, useState } from "react"
import { Header } from "./header/header"
import { Body } from "./body/body"
import { Filter } from "./filter/filter"
import { AppContext, AppContextProvider, IAppContext } from "../context/app.context"



const Layout = ({children}:LayoutProps): JSX.Element => {

    const regions: string[] = [ "Europe", "Asia", "Americas", "Oceania", "Africa", "World" ];

    const [dropdown, setDropdown] = useState<boolean>(false);


    const { region, setRegion, search, setSearch } = useContext(AppContext);
    

    return(
        <div className={styles.wrapper}>
            <Header className={styles.header}>
                <div>Where in the world?</div>
                <div>{search}</div>
            </Header>
            <Filter className={styles.filter}>
                <div className={styles.searchbox}>
                    <input placeholder="Search for a country..." onChange={(event)=>setSearch(event.target.value)}></input>
                </div>
                <div className={styles.dropdown} onClick={()=>setDropdown(prev=>!prev)}>
                    <span>{region}</span>
                    {dropdown?
                        <div className={styles.dropdown_content}>
                            {regions.map((e:string, index:number)=><p key={index} onClick={()=>setRegion(e)} >{e}</p>)}
                        </div>
                    : null}
                </div>
            </Filter>
            <Body className={styles.body}>
                {children}
            </Body>
        </div>
    )
}

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T): JSX.Element{
        return(
            <AppContextProvider search={""} region={"Filter by region"}>
                <Layout>
                    <Component {...props} />
                </Layout>
            </AppContextProvider>
        )
    }
}