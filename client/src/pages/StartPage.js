import React from "react"
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Main} from "../components/Main";
import {Helmet} from "react-helmet";

export const StartPage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <meta name="start page" content="The beginning" />
                <title>Frontend HW2</title>
            </Helmet>
            <Header />
            <Main />
            <Footer/>
        </React.Fragment>
    )
}