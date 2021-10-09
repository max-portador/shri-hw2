import React from "react";
import tools from "../assets/tools.svg"

export function Main(){
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
            <button type="submit" className="main__button btn_yellow">
                    <span>
                        Open settings
                    </span>
            </button>
        </div>
    </main>
    )
}