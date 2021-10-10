import React, {useContext} from "react"
import {Footer} from "../components/Footer";
import {HistoryHeader} from "../components/HistoryHeader";
import {HistoryMain} from "../components/HistoryMain";
import {HistoryContext} from "../hooks/history.context";


export const HistoryPage = () => {
    const {builds, status} = useContext(HistoryContext)


    return (
        <HistoryContext.Provider value={{builds, status}}>
            <React.Fragment>
                <HistoryHeader/>
                <HistoryMain/>
                <Footer/>
            </React.Fragment>
        </HistoryContext.Provider>

    )
}