import {LOGIN, LOGOUT} from "./types";

export const login = (repository, buildCommand, mainBranch, syncTimeout) => {

    return {
        type: LOGIN,
        repository,
        buildCommand,
        mainBranch,
        syncTimeout
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}