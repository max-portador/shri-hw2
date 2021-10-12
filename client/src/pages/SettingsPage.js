import React from "react"
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {SettingsMain} from "../components/SettingsMain";
import "./SettingsPage.css"
import {Helmet} from "react-helmet";


export const SettingsPage = () => {
    return (
        <React.Fragment>
            <Helmet>
                <meta name="settings" content="auth github repository" />
                <title>Настройки</title>
            </Helmet>
            <Header/>
            <SettingsMain/>
            <Footer/>
        </React.Fragment>
    )
}