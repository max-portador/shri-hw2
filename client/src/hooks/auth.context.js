import {createContext} from "react";

function noop() {}

export const AuthContext = createContext( {
    repository: "",
    buildCommand: "npm ci && npm run build",
    mainBranch: "master |",
    syncTimeout: 10,
    login: noop,
    logout: noop,
    isAuthenticated: false
})