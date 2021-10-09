import React from "react"
import gear from "../assets/gear.svg"

export const Header = () => {
    return (
        <header className="header">
            <label className="header__label">
                School CI Server
            </label>
            <button className="header__button btn_grey" type="submit">
                <img src={gear}>
                </img>
                <span>
            Settings
                </span>
            </button>
        </header>
    )
}