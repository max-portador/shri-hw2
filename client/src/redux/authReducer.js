import {LOGIN, LOGOUT} from "./types";
import initialState from "./initialAuthState";

const storageName = "authData"
const localhostState = JSON.parse(localStorage.getItem(storageName)) || initialState

export const authReducer = (state = localhostState, action) => {
    switch(action.type){
        case LOGIN: {
            const newState = {
                repository: action.repository,
                buildCommand: action.buildCommand,
                mainBranch: action.mainBranch,
                syncTimeout: action.syncTimeout,
                isAuthenticated: true
            }

            localStorage.setItem(storageName, JSON.stringify(newState))
            return newState
        }
        case LOGOUT: {
            localStorage.setItem(storageName, JSON.stringify(initialState))
            return initialState}
        default: return state
    }
}