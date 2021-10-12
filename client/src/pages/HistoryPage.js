import React, {useContext} from "react"
import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import {HistoryMain} from "../components/HistoryMain";
import {HistoryContext} from "../hooks/history.context";
import "./HistoryPage.css"


export const HistoryPage = () => {
    const {builds, status} = useContext(HistoryContext)


    return (
        <HistoryContext.Provider value={{builds, status}}>
            <React.Fragment>
                <Header/>
                <HistoryMain/>
                <Footer/>
            </React.Fragment>
        </HistoryContext.Provider>

    )
}