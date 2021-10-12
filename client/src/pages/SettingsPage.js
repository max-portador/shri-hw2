import React from "react"
import {Header} from "../components/Header";
import {Footer} from "../components/Footer";
import {SettingsMain} from "../components/SettingsMain";
import "./SettingsPage.css"


export const SettingsPage = () => {
    return (
        <React.Fragment>
            <Header/>
            <SettingsMain/>
            <Footer/>
        </React.Fragment>
    )
}