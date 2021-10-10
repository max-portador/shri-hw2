import React from "react"
import {SettingsHeader} from "../components/SettingsHeader";
import {Footer} from "../components/Footer";
import {SettingsMain} from "../components/SettingsMain";
import "./SettingsPage.css"


export const SettingsPage = () => {
    return (
        <React.Fragment>
            <SettingsHeader/>
            <SettingsMain/>
            <Footer/>
        </React.Fragment>
    )
}