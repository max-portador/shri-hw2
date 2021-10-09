import React, {useContext} from "react";
import {HistoryContext} from "../hooks/history.context";
import {BuildCard} from "./BuildCard";

export const HistoryMain = () => {
    const { builds, status } = useContext(HistoryContext)

    return (
        <React.Fragment>
            <main className="history">
                <div className="history__cards">
                    { builds.map(build => {
                            return <BuildCard data={build} status={status}/>
                        })
                    }
                </div>
                <button className="history__showmore btn_grey">
                    <span>Show more</span>
                </button>
            </main>

        </React.Fragment>
    )
}
