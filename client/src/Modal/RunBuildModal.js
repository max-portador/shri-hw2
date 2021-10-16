import React from "react";
import {useForm} from "react-hook-form";
import {connect} from "react-redux";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";
import Loader from "../components/Loader";
import playSVG from "../assets/play.svg";
import './Modal.css'
import {
    hideLoaderModal,
    hideModal,
    showLoaderModal,
    showModal
} from "../redux/actions";

const scheme = yup.object().shape({
    commitHash: yup.string()
        .required("Commit hash is a required field")
        .matches(/^[^ЁёА-я]*$/, "Invalid commit hash")
        .min(7, 'Commit hash is too short')
})


const Modal = ({isOpen, isLoading, showModal, hideModal, showLoader, hideLoader, commits}) => {

    const { register, handleSubmit, formState, reset, clearErrors } = useForm({
        mode: "onSubmit",
        resolver: yupResolver(scheme)
    })

    const checkClick = event => {
        if (event.target.getAttribute("class") === "modal") {
            hideModal()
        }
    }

    const onRunningBuild = () => {
        showLoader()
        setTimeout(() => {
            clearErrors()
            reset({"commitHash": ""})
            hideLoader()
            hideModal()
        }, 2000)
    }

    const onCancel = () => {
        clearErrors()
        reset({"commitHash": ""})
        hideModal()
    }

    const checkKeyDown = event => {
        if (event.keyCode === 9) {event.preventDefault()}
        if (event.keyCode === 27) {onCancel()}
    }


        return <React.Fragment>
            <button className="header__button btn_grey"
                    type="submit"
                    onClick={showModal}>
                <img src={playSVG} alt="run" />
                <span className="title__span"> Run build </span>
            </button>
            { isOpen && (
                <div className="modal" onClick={checkClick} onKeyDown={checkKeyDown}>
                { isLoading && (Loader())}
                    <form className="modal__body"
                          onSubmit={handleSubmit(onRunningBuild)}
                    >

                        <label className="modal__title"> New build </label>
                        <label className="modal__subtitle">
                            Enter the commit hash which you want to build.
                        </label>

                        {formState.errors.commitHash && (
                            <div className="error">{formState.errors.commitHash.message}</div>
                        )}

                        <input type="search"
                               className={(formState.errors.commitHash ? "modal__input error_input"
                                                                       : "modal__input")}
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
                                <button className={(isLoading ? " btn_disabled"
                                                              : "btn_yellow")}
                                                    type="submit">
                                    <span>Run build</span>
                                </button>
                                <button className={(isLoading ? " btn_disabled"
                                                              : "btn_white")}
                                        onClick={onCancel} >
                                    <span>Cancel</span>
                                </button>
                            </div>
                        </form>
                    </div>)
            }

            <datalist id="hashes">
                {commits.map(hash => (<option value={hash}/>)) }
            </datalist>

        </React.Fragment>
}

const mapStateToProps = state => {
    return {
        isOpen: state.loader.isModalOpen,
        isLoading: state.loader.loadingModal,
        commits: state.history.builds
            .map(build => build.hash)
            .filter((value, id, arr) => arr.indexOf(value) === id)
    }
}

const mapDispatchToProps = {
            showLoader: showLoaderModal,
            hideLoader: hideLoaderModal,
            showModal,
            hideModal
   }


export default connect(mapStateToProps, mapDispatchToProps)(Modal)