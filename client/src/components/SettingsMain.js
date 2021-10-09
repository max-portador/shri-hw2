import React, {useContext, useState} from "react";
import {AuthContext} from "../hooks/auth.context";

export function SettingsMain(){
    const auth = useContext(AuthContext)
    const [state, setState] = useState( {
        repository: auth.repository,
        buildCommand: auth.buildCommand,
        mainBranch: auth.mainBranch,
        syncTimeout: auth.syncTimeout
        }
      )

    const inputHandler = event => {
        setState( {...state, [event.target.name]: event.target.value})
    }

    const loginHandler = () => {
        auth.login(state.repository,
                    state.buildCommand,
                    state.mainBranch,
                    state.syncTimeout)
    }

    return (
        <React.Fragment>
            <main className="settings">
                <div className="settings__container">
                    <label className="settings__title">
                        Setting
                    </label>
                    <label className="settings__subtitle">
                        Configure repository connection and synchronization settings.
                    </label>
                    <div className="settings__label">
                        <label>
                            GitHub repository
                        </label>
                        <span className="asterics">
                        *
                        </span>
                    </div>
                    <input type="search"
                           className="settings__input"
                           placeholder="user-name/repo-name"
                           name="repository"
                           onChange={inputHandler}
                    >
                    </input>

                    <div className="settings__label">
                        <label>
                            Build command
                        </label>
                        <span className="asterics">
                          *
                        </span>
                    </div>
                    <input type="search"
                           className="settings__input"
                           value={state.buildCommand}
                           name="buildCommand"
                           onChange={inputHandler}
                          >
                    </input>

                    <div className="settings__label">
                        <label>
                            Main branch
                        </label>
                    </div>
                    <input type="search"
                           className="settings__input"
                           value={state.mainBranch}
                           name="mainBranch"
                           onChange={inputHandler}
                          >
                    </input>

                    <div className="settings__sync">
                        <span className="settings__label">
                            Synchronize every
                        </span>
                        <input className="settings__input"
                               id="sync"
                               value={state.syncTimeout}
                               name="syncTimeout"
                               onChange={inputHandler}
                               >
                        </input>
                        <span className="settings__label">
                            minutes
                        </span>
                    </div>

                    <div className="settings__buttons">
                        <button className="btn_yellow"
                        onClick={loginHandler}><span>Save</span></button>
                        <button className="btn_grey"><span>Cancel</span></button>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}