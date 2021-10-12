import React, {useContext, useState} from "react";
import {HistoryContext} from "../hooks/history.context";
import {BuildCard} from "./BuildCard";
import Loader from "./Loader";

export const HistoryMain = () => {
    const { builds, status } = useContext(HistoryContext)
    const [shown, setShown] = useState(3)
    const [loading, setLoading] = useState(false)
    const showMore = () => {
        setLoading(true)
        setTimeout(()=> {
            setLoading(false)
            setShown(shown + 3)
        } , 2000)

    }

    return (
        <React.Fragment>
            <main className="history">

                <div className="history__cards">
                    {loading && <Loader style={{ paddingTop: "8rem", alignself: "start"}}/>}
                    { builds.slice(0, shown).map(build => {
                            return <BuildCard data={build} status={status} key={build.num}/>
                        })
                    }
                </div>
                <button className="history__showmore btn_grey" onClick={showMore}>
                    <span>Show more</span>
                </button>
            </main>

        </React.Fragment>
    )
}
