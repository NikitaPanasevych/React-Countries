import { createContext, ReactNode, useState } from "react";


export interface IAppContext{
    search : string;
    region : string;
    lightMode : boolean;
    setMode? : (newMode : boolean) => void;
    setSearch? : (newSearch: string) => void;
    setRegion? : (newRegion: string) => void;
}

export const AppContext = createContext<IAppContext>({search: "", region: "", lightMode: true})

export const AppContextProvider = ({children, region, search, lightMode}:IAppContext & {children: ReactNode}): JSX.Element => {

    const [searchState, setSearchState] = useState<string>(search);
    const [regionState, setRegionState] = useState<string>(region);
    const [lightModeState, setLightMode] = useState<boolean>(lightMode);

    const setSearch = (newSearch: string) => {
        setSearchState(newSearch);
    };
    const setRegion = (newRegion: string) => {
        setRegionState(newRegion);
    };
    const setMode = (newMode: boolean) => {
        setLightMode(newMode);
    }
    

    return(
        <AppContext.Provider value={
            {
                search: searchState,
                region: regionState, 
                lightMode: lightModeState, 
                setRegion, 
                setSearch, 
                setMode,
            }}>
            {children}
        </AppContext.Provider>
    )
}