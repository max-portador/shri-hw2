import React, {useContext} from "react"
import {useHistory, useLocation} from "react-router-dom";
import {AuthContext} from "../hooks/auth.context";
import RunBuildModal from "../Modal/RunBuildModal";
import gearSVG from "../assets/gear.svg";

export const Header = () => {
    const history = useHistory()
    const location = useLocation()
    const {repository} = useContext(AuthContext)

    const redirectToSettingsPage = event => {
        event.preventDefault()
        history.push('/settings')
    }


    return (
        <header className="header">
            { location.pathname === '/history' ?
                <label className="title__label">{repository}</label>
                : <label className="header__label"> School CI Server </label>
            }


            {
                location.pathname === '/' &&
                <button className="header__button btn_grey" type="submit"
                        onClick={redirectToSettingsPage}>
                    <img src={gearSVG} alt="settings"/>
                    <span> Settings </span>
                </button>
            }
            {   location.pathname === "/history" &&
                <section className="title__btns">
                    <RunBuildModal/>
                    <button className="header__button btn_grey"
                            type="submit"
                            onClick={redirectToSettingsPage}
                    >
                        <img src={gearSVG} alt="settings">
                        </img>
                    </button>
                </section>
            }

        </header>
    )
}