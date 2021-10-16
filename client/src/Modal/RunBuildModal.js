import React, {useContext, useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loader from "../components/Loader";
import playSVG from "../assets/play.svg";
import './Modal.css'
import {HistoryContext} from "../hooks/history.context";

const scheme = yup.object().shape({
    commitHash: yup.string()
        .required("Commit hash is a required field")
        .matches(/^[^ЁёА-я]*$/, "Invalid commit hash"),
})


export default () => {

    const [state, setState] = useState({
        isOpen: false,
        isLoading: false})

    const { builds} = useContext(HistoryContext)

    const commits = builds.map(build => build.hash)
                            .filter((value, id, arr) => arr.indexOf(value) === id)

    const { register, handleSubmit, formState, reset, clearErrors } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(scheme)
    })

    const checkClick = event => {
        if (event.target.getAttribute("class") === "modal") {
            setState({isOpen: false})
        }
    }

    const onRunningBuild = () => {
        setState({
            isOpen: true,
            isLoading: true
        })
        setTimeout(() => {
            clearErrors()
            reset({"commitHash": ""})
            setState({
                isOpen: false,
                isLoading: false
            })
        }, 2000)
    }

    const onCancel = () => {
        clearErrors()
        reset({"commitHash": ""})
        setState({
            isOpen: false,
            isLoading: false
        })
    }

    const checkKeyDown = event => {
        if (event.keyCode === 9) {event.preventDefault()}
        if (event.keyCode === 27) {onCancel()}
    }


        return <React.Fragment>
            <button className="header__button btn_grey"
                    type="submit"
                    onClick={() => setState({isOpen: true})}>
                <img src={playSVG} alt="run">
                </img>
                <span className="title__span">
                Run build
            </span>
            </button>
            { state.isOpen && (
                <div className="modal" onClick={checkClick} onKeyDown={checkKeyDown}>
                    { state.isLoading && (Loader())}
                        <form className="modal__body" onSubmit={handleSubmit(onRunningBuild)}>

                            <label className="modal__title">
                                New build
                            </label>
                            <label className="modal__subtitle">
                                Enter the commit hash which you want to build.
                            </label>
                            {formState.errors.commitHash && (
                                <div className="error">{formState.errors.commitHash.message}</div>
                            )}
                            <input type="search"
                                   className={(
                                                formState.errors.commitHash
                                                    ? "modal__input error_input"
                                                    : "modal__input"
                                             )}
                                   placeholder="Commit hash"
                                   name="commitHash"
                                   autoFocus={true}
                                   defaultValue=""
                                   list="hashes"
                                   autoComplete="off"
                                   {...register("commitHash")}
                                   onKeyDown={checkKeyDown}
                            />
                            <div className="modal__buttons" onKeyDown={checkKeyDown}>
                                <button className={(state.isLoading ? " btn_disabled" : "btn_yellow")} type="submit"
                                ><span>Run build</span></button>
                                <button className={(state.isLoading ? " btn_disabled" : "btn_white")}
                                        onClick={onCancel}
                                ><span>Cancel</span></button>
                            </div>
                        </form>
                    </div>)

            }
            <datalist id="hashes">
                {commits.map(hash => (<option value={hash}/>)) }
            </datalist>

        </React.Fragment>

}