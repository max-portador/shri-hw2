import React, {useState} from "react";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loader from "../components/Loader";
import playSVG from "../assets/play.svg";
import './Modal.css'

const scheme = yup.object().shape({
    commitHash: yup.string()
        .required("Build command is a required field")
        .matches(/^[^ЁёА-я]*$/, "Invalid build command"),
})


export default () => {

    const [state, setState] = useState({
        isOpen: false,
        isLoading: false})

    const { register, handleSubmit, formState } = useForm({
        mode: "onBlur",
        reValidateMode: "onSubmit",
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
            setState({
                isOpen: false,
                isLoading: false
            })
        }, 2000)
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
                <div className="modal" onClick={checkClick}>
                        <form className="modal__body" onSubmit={handleSubmit(onRunningBuild)}>
                            { state.isLoading && (Loader())}
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
                                   {...register("commitHash")}
                                   onKeyDown={(e) => { if (e.keyCode === 9) e.preventDefault() }}
                            />
                            <div className="modal__buttons">
                                <button className={(state.isLoading ? " btn_disabled" : "btn_yellow")}
                                ><span>Run build</span></button>
                                <button className={(state.isLoading ? " btn_disabled" : "btn_grey")}
                                        onClick={() => setState({isOpen: false})}
                                ><span>Cancel</span></button>
                            </div>
                        </form>
                    </div>)
            }

        </React.Fragment>

}