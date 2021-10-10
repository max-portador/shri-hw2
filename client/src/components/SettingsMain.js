import React, {useContext, useState} from "react";
import {AuthContext} from "../hooks/auth.context";
import {useHistory} from "react-router-dom";

export function SettingsMain(){
    const auth = useContext(AuthContext)
    const history = useHistory()
    const [state, setState] = useState({
        repository: auth.repository,
        buildCommand: auth.buildCommand,
        mainBranch: auth.mainBranch,
        syncTimeout: auth.syncTimeout,
    })

    const [inputStyle, setInputStyle] = useState({})
    const bordercolor = "#E00000"

    const inputStyleHandler = (name) => {
        setInputStyle({...inputStyle, [name]: bordercolor})
    }

    const inputHandler = event => {
        setState({...state, [event.target.name]: event.target.value})
    }

    const loginHandler = () => {

        if (!state.repository) {
            inputStyleHandler("repository")
            return
        }
        setInputStyle({})
        if (!state.buildCommand) {
            inputStyleHandler("buildCommand")
            return;
        }
        setInputStyle({})

        auth.login(state.repository,
            state.buildCommand,
            state.mainBranch,
            state.syncTimeout)
        setInputStyle({})
        history.push('/history')

    }

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
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
                           value={state.repository || ""}
                           style={{borderColor: inputStyle.repository || "" }}
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
                           style={{borderColor: inputStyle.buildCommand || "" }}
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
                        <button className="btn_yellow" onClick={loginHandler}>
                            <span>Save</span>
                        </button>

                        <button className="btn_grey" onClick={logoutHandler}  >
                            <span>Cancel</span>
                        </button>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}