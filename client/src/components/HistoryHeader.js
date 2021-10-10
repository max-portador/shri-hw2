import React, {useContext} from "react";
import {AuthContext} from "../hooks/auth.context";
import RunBuildModal from "../Modal/RunBuildModal";
import gearSVG from '../assets/gear.svg'
import {useHistory} from "react-router-dom";

export const HistoryHeader = () => {
    const history = useHistory()

    const redirectToSettingsPage = event => {
        event.preventDefault()
        history.push('/settings')
    }

    const {repository} = useContext(AuthContext)

    return (
        <React.Fragment>
            <header className="title">
                <label className="title__label">
                    {repository}
                </label>
                <section className="title__btns">
                    <RunBuildModal/>
                    <button className="title__button btn_grey"
                            type="submit"
                            onClick={redirectToSettingsPage}
                           >
                        <img src={gearSVG}>
                        </img>
                    </button>
                </section>
            </header>
        </React.Fragment>
    )
}