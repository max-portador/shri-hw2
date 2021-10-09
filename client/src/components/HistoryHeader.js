import React, {useContext} from "react";
import {AuthContext} from "../hooks/auth.context";
import playSVG from '../assets/play.svg'
import gearSVG from '../assets/gear.svg'

export const HistoryHeader = () => {
    const {repository} = useContext(AuthContext)
    return (
        <React.Fragment>
            <header className="title">
                <label className="title__label">
                    {repository}
                </label>
                <section className="title__btns">
                    <button className="title__button btn_grey" type="submit">
                        <img src={playSVG}>
                        </img>
                        <span>
                Run build
            </span>
                    </button>
                    <button className="title__button btn_grey" type="submit">
                        <img src={gearSVG}>
                        </img>
                    </button>
                </section>
            </header>
        </React.Fragment>
    )
}