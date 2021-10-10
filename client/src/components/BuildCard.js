import React from "react"
import commitSVG from "../assets/code-commit.svg"
import userSVG from "../assets/user.svg"
import calendarSVG from "../assets/calendar.svg"
import timerSVG from "../assets/timr.svg"

export const BuildCard = ({data, status}) => {
    const _status = data.status
    return (
        <div className="history__card">
            <img className="card__circle"
                 src={status[_status].icon}>
            </img>
            <div className="card__content">
                <section className="card__meta">
                    <div className="card__title">
                        <label className="card__num" style={{color: status[_status].statusColor}}>
                            #{data.num}
                        </label>

                        <label className="card__message">
                            {data.message}
                        </label>
                    </div>
                    <div className="card__bottom">
                        <div className="card__commit">
                            <img className="card__icon" src={commitSVG}>
                            </img>
                            <label className="card__branch">
                                {data.branch}
                            </label>
                            <label className="card__hash">
                                {data.hash}
                            </label>
                        </div>

                        <div className="card__author">
                            <img className="card__iconuser" src={userSVG}>
                            </img>
                            <label className="card__username">
                                {data.author}
                            </label>
                        </div>
                    </div>
                </section>
                <hr></hr>
                    <section className="card__datetime">
                        <div className="card__datetimeup">
                            <img className="card__calendar" src={calendarSVG}>
                            </img>
                            <span className="card__date">
                            {data.date}
                        </span>
                        </div>
                        <div className="card__datetimefloor">
                            <img className="card__calendar" src={timerSVG}>
                            </img>
                            <span className="card__date">
                            {data.duration}
                        </span>
                        </div>
                    </section>
            </div>
        </div>
    )
}