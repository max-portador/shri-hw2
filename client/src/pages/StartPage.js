import React from "react"
import {Header} from "../components/Header";
import {Main} from "../components/Main";
import {Footer} from "../components/Footer";

export const StartPage = () => {
    return (
        <React.Fragment>
            <Header />
            <Main />
            <Footer/>
        </React.Fragment>
    )
}