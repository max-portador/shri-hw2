import {
    ADD_SHOWN_CARDS, RESET_SHOWN_CARDS, LOGIN, LOGOUT,
    HIDE_LOADER_AUTH, HIDE_LOADER_HISTORY, HIDE_LOADER_MODAL, HIDE_MODAL,
    SHOW_LOADER_AUTH, SHOW_LOADER_HISTORY, SHOW_LOADER_MODAL, SHOW_MODAL
} from "./types";

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

export const showLoaderAuth = () => {
    return {
        type: SHOW_LOADER_AUTH
    }
}

export const hideLoaderAuth = () => {
    return {
        type: HIDE_LOADER_AUTH
    }
}
export const showModal = () => {
    return {
        type: SHOW_MODAL
    }
}

export const hideModal = () => {
    return {
        type: HIDE_MODAL
    }
}
export const showLoaderModal = () => {
    return {
        type: SHOW_LOADER_MODAL
    }
}

export const hideLoaderModal = () => {
    return {
        type: HIDE_LOADER_MODAL
    }
}
export const showLoaderHistory = () => {
    return {
        type: SHOW_LOADER_HISTORY
    }
}

export const hideLoaderHistory = () => {
    return {
        type: HIDE_LOADER_HISTORY
    }
}

export const addShownCards = () => {
    return {
        type: ADD_SHOWN_CARDS
    }
}
export const resetShownCards = () => {
    return {
        type: RESET_SHOWN_CARDS
    }
}