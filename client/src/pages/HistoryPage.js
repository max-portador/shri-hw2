import React, {useContext} from "react"
import {Helmet} from "react-helmet";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HistoryMain from "../components/HistoryMain";
import "./HistoryPage.css"


export const HistoryPage = () => {

    return (
            <React.Fragment>
                <Helmet>
                    <meta name="history" content="repository builds" />
                    <title>История</title>
                </Helmet>
                <Header/>
                <HistoryMain/>
                <Footer/>
            </React.Fragment>
    )
}