import React from "react";
import './Modal.css'
import playSVG from "../assets/play.svg";

export default class RunBuildModal extends React.Component{
    state = {
        isOpen: false
    }

    render() {
        return (<React.Fragment>
            <button className="title__button btn_grey"
                    type="submit"
                    onClick={() => this.setState({isOpen: true})}>
                <img src={playSVG} alt="run">
                </img>
                <span className="title__span">
                Run build
            </span>
            </button>
            { this.state.isOpen && (
                <div className="modal">
                        <div className="modal__body">
                            <label className="modal__title">
                                New build
                            </label>
                            <label className="modal__subtitle">
                                Enter the commit hash which you want to build.
                            </label>
                            <input type="search"
                                   className="modal__input"
                                   placeholder="Commit hash"
                                   name="commit hash"
                            >
                            </input>
                            <div className="modal__buttons">
                                <button className="btn_yellow"
                                ><span>Run build</span></button>
                                <button className="btn_grey"
                                        onClick={() => this.setState({isOpen: false})}
                                ><span>Cancel</span></button>
                            </div>
                        </div>
                    </div>)
            }

        </React.Fragment>)
    }

}