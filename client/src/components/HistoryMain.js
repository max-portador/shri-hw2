import React, {useState} from "react";
import {BuildCard} from "./BuildCard";
import Loader from "./Loader";
import {connect} from "react-redux";

const HistoryMain = ({ builds, status }) => {
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
            {loading && <Loader/>}
            <main className="history">

                <div className="history__cards">

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

const mapStateToProps = state => {
    return {
        builds: state.history.builds,
        status: state.history.status
    }
}

export default connect(mapStateToProps, null)(HistoryMain)