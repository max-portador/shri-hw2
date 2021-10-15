import React from "react";
import {BuildCard} from "./BuildCard";
import Loader from "./Loader";
import {connect} from "react-redux";
import {addShownCards, hideLoaderHistory, showLoaderHistory} from "../redux/actions";

const HistoryMain = ({ builds, status, shown, loading, addShownCards, showLoader, hideLoader }) => {
    const showMore = () => {
        if (shown >= builds.length) return
        showLoader()
        setTimeout(()=> {
            hideLoader()
            addShownCards()
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

const mapStateToProps = state => {
    return {
        builds: state.history.builds,
        status: state.history.status,
        shown: state.loader.countShown,
        loading: state.loader.loadingHistory
    }
}

const mapDispatchToProps = {
    addShownCards,
    showLoader: showLoaderHistory,
    hideLoader: hideLoaderHistory
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryMain)