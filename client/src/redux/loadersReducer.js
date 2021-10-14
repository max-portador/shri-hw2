import {
    ADD_SHOWN_CARDS,
    HIDE_LOADER_AUTH,
    HIDE_LOADER_HISTORY, HIDE_LOADER_MODAL,
    HIDE_MODAL, RESET_SHOWN_CARDS,
    SHOW_LOADER_AUTH,
    SHOW_LOADER_HISTORY, SHOW_LOADER_MODAL,
    SHOW_MODAL
} from "./types";

const initialState = {
    loadingAuth: false,
    isModalOpen: false,
    loadingModal: false,
    loadingHistory: false,
    countShown: 3
}

export function loadersReducer(state = initialState, action) {
    switch (action.type){
        case SHOW_LOADER_AUTH: {
            return {...state, loadingAuth: true}
        }
        case HIDE_LOADER_AUTH: {
            return {...state, loadingAuth: false}
        }
        case SHOW_MODAL: {
            return {...state, isModalOpen: true}
        }
        case HIDE_MODAL: {
            return {...state, isModalOpen: false}
        }
        case SHOW_LOADER_MODAL: {
            return {...state, loadingModal: true}
        }
        case HIDE_LOADER_MODAL: {
            return {...state, loadingModal: false}
        }
        case SHOW_LOADER_HISTORY: {
            return {...state, loadingHistory: true}
        }
        case HIDE_LOADER_HISTORY: {
            return {...state, loadingHistory: false}
        }
        case ADD_SHOWN_CARDS: {
            return {...state, countShown: state.countShown + 3}
        }
        case RESET_SHOWN_CARDS: {
            return {...state, countShown: 3}
        }
        default: return state
    }

}