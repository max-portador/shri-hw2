import React from "react"
import {Switch, Route, Redirect} from "react-router-dom";
import {HistoryPage} from "./pages/HistoryPage";
import {StartPage} from "./pages/StartPage";
import {SettingsPage} from "./pages/SettingsPage";
import {connect} from "react-redux";

const Routes = ({isAuthenticated}) => {
    if (isAuthenticated) {
    return <Switch>
                <Route path="/history" exact>   <HistoryPage />   </Route>
                <Route path="/settings" exact>  <SettingsPage />  </Route>
                <Redirect to="/history" />
            </Switch>
    }
    return  <Switch>
                <Route path="/" exact>          <StartPage />     </Route>
                <Route path="/settings" exact>  <SettingsPage />  </Route>
                <Redirect to="/" />
            </Switch>

}

const mapStateToProps = state => {
    return { isAuthenticated: state.auth.isAuthenticated }
}

export default connect(mapStateToProps, null)(Routes)