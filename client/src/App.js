import React from "react"
import {BrowserRouter} from "react-router-dom";
import {useRoutes} from "./routes"
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./hooks/auth.context";



function App() {
    const {
            login, logout,
            repository, buildCommand, mainBranch, syncTimeout } = useAuth()
    const isAuthenticated = !! repository
    const routes = useRoutes(isAuthenticated)

  return (
      <AuthContext.Provider value={{
          login, logout,
          repository, buildCommand, mainBranch, syncTimeout,
          isAuthenticated
      }}>
          <BrowserRouter>
              {routes}
          </BrowserRouter>
      </AuthContext.Provider>
  )
}

export default App
