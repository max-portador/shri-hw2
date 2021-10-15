import React, {useContext, useState} from "react";
import {HistoryContext} from "../hooks/history.context";
import {BuildCard} from "./BuildCard";
import Loader from "./Loader";

export const HistoryMain = () => {
    const { builds, status } = useContext(HistoryContext)
    const [shown, setShown] = useState(3)
    const [loading, setLoading] = useState(false)

    const showMore = () => {
        if (shown >= builds.length) return
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
            setShown(shown + 3)
        } , 2000)

    }

    return (
        <React.Fragment>
            {loading && <Loader style={{ paddingTop: "8rem", alignself: "start"}}/>}
            <main className="history">

                <div className="history__cards">

                    { builds.slice(0, shown).map(build => {
                            return <BuildCard data={build} status={status} key={build.num}/>
                        })
                    }
                </div>
                <div className="history__showmore">
                    <button className={["history__showmore__btn", shown >= builds.length
                                        ? "btn_disabled" : "btn_grey"].join(" ")}
                            onClick={showMore}>
                        <span className="history__showmore__span">Show more</span>
                    </button>
                </div>

            </main>

        </React.Fragment>
    )
}
