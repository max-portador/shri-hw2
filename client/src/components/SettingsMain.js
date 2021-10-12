import React, {useContext, useState} from "react"
import {AuthContext} from "../hooks/auth.context"
import {useHistory} from "react-router-dom"
import {useForm} from "react-hook-form"
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup";
import {SettingsInput} from "./SettingsInput"
import Loader from "./Loader";


// Прописываем правила валидации полей input
const scheme = yup.object().shape({
    repository: yup.string()
                .required("GitHub repository is a required field")
                .matches(/^[a-zA-Z0-9_-]*\/[a-zA-Z0-9_-]*$/, "Invalid GitHub repository"),

    buildCommand: yup.string()
                .required("Build command is a required field")
                .matches(/^[^ЁёА-я]*$/, "Invalid build command"),

    mainBranch: yup.string()
                .matches(/^[^ЁёА-я]*$/, "Invalid branch name"),

    syncTimeout: yup.number("Timeout must be number")
                .positive("Nubmer must be positive")
                .integer("Nubmer must be integer")

})


export function SettingsMain(){

    const auth = useContext(AuthContext)
    const history = useHistory()
    const [loading, setLoading] = useState(false)

    const { register, handleSubmit, formState } = useForm({
        mode: "onBlur",
        reValidateMode: "onSubmit",
        resolver: yupResolver(scheme)
    })

    const loginHandler = data => {
        setLoading(true)
        setTimeout( () => {
            auth.login(data.repository, data.buildCommand, data.mainBranch, data.syncTimeout)
            setLoading(false)
            history.push("/history")
        }, 2000)
    }

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }

    return (
        <React.Fragment>
            {(loading && Loader())}
            <main className="settings">

                <form className="settings__container" onSubmit={handleSubmit(loginHandler)} >

                    <label className="settings__title">Setting</label>
                    <label className="settings__subtitle">
                        Configure repository connection and synchronization settings.
                    </label>
                    <div className="settings__label">
                        <label>GitHub repository</label>
                       <span className="asterics"> * </span>
                        {

                            formState.errors.repository &&
                            ( <div className="error">{formState.errors.repository.message}
                            </div>)
                        }
                    </div>

                    <SettingsInput className={(
                        formState.errors.repository ? "settings__input error_input" : "settings__input"
                    )}
                                   placeholder="user-name/repo-name"
                                   id="repository"
                                   name="repository"
                                   defaultValue={auth.repository}
                                   {...register("repository")}

                    />

                    <div className="settings__label">
                        <label> Build command </label>
                        <span className="asterics"> * </span>
                        {formState.errors.buildCommand && (
                            <div className="error">{formState.errors.buildCommand.message}</div>
                        )}
                    </div>
                    <SettingsInput className={(
                        formState.errors.buildCommand ? "settings__input error_input" : "settings__input"
                    )}
                                   id="buildCommand"
                                   name="buildCommand"
                                   defaultValue={auth.buildCommand}
                                   {...register("buildCommand")}
                    />
                    <div className="settings__label">
                        <label> Main branch </label>
                        {formState.errors.mainBranch && (
                            <div className="error">{formState.errors.mainBranch.message}</div>
                        )}
                    </div>
                    <SettingsInput className={(
                        formState.errors.mainBranch ? "settings__input error_input" : "settings__input"
                    )}
                           id="mainBranch"
                           name="mainBranch"
                           defaultValue={auth.mainBranch}
                           {...register("mainBranch")}
                    />
                    <div className="settings__sync">
                        <span className="settings__label">Synchronize every</span>
                        <SettingsInput className={(
                            formState.errors.syncTimeout ? "settings__input error_input" : "settings__input"
                        )}
                               type="number"
                               id="sync"
                               name="syncTimeout"
                               defaultValue={auth.syncTimeout}
                               {...register("syncTimeout")}
                        />
                        <span className="settings__label"> minutes </span>

                    </div>
                    {formState.errors.syncTimeout && (
                        <div className="error">{formState.errors.syncTimeout.message}</div>
                    )}
                    <div className="settings__buttons">
                        <button className={(loading ? " btn_disabled" : "btn_yellow")}
                                type="submit">
                            <span>Save</span>
                        </button>

                        <button className={(loading ? " btn_disabled" : "btn_grey")}
                                onClick={logoutHandler}  >
                            <span>Cancel</span>
                        </button>
                    </div>
                </form>
            </main>
        </React.Fragment>
    )
}