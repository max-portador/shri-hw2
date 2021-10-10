import React from "react";
import tools from "../assets/tools.svg"
import {useHistory} from "react-router-dom";

export function Main(){
    const history = useHistory()

    const redirectToSettingsPage = event => {
        event.preventDefault()
        history.push('/settings')
    }

    return (
    <main className="main">
        <div className="main__content">
            <img src={tools}>
            </img>
            <label>
                    <span>
                     Configure repository
                    </span>
                <span>
                        connection and synchronization settings
                    </span>
            </label>
            <button type="submit" className="main__button btn_yellow"
                    onClick={redirectToSettingsPage}
            >
                    <span>
                        Open settings
                    </span>
            </button>
        </div>
    </main>
    )
}