import React from "react"
import gear from "../assets/gear.svg"
import {useHistory} from "react-router-dom";

export const Header = () => {

    const history = useHistory()

    const redirectToSettingsPage = event => {
        event.preventDefault()
        history.push('/settings')
    }


    return (
        <header className="header">
            <label className="header__label">
                School CI Server
            </label>
            <button
                className="header__button btn_grey"
                type="submit"
                onClick={redirectToSettingsPage}
            >
                <img src={gear} alt="settings">
                </img>
                <span>
            Settings
                </span>
            </button>
        </header>
    )
}