import { createContext, ReactNode, useState } from "react";


export interface IAppContext{
    search : string;
    region : string;
    setSearch? : (newSearch: string) => void;
    setRegion? : (newRegion: string) => void;
}

export const AppContext = createContext<IAppContext>({search: "", region: ""})

export const AppContextProvider = ({children, region, search}:IAppContext & {children: ReactNode}): JSX.Element => {

    const [searchState, setSearchState] = useState<string>(search);
    const [regionState, setRegionState] = useState<string>(region);
    const setSearch = (newSearch: string) => {
        setSearchState(newSearch);
    };
    const setRegion = (newRegion: string) => {
        setRegionState(newRegion);
    };


    return(
        <AppContext.Provider value={{search: searchState, region: regionState, setRegion, setSearch }}>
            {children}
        </AppContext.Provider>
    )
}