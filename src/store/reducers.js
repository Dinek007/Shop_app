import { handleActions } from 'redux-actions'
import produce from 'immer'

import { ACTIONS } from './consts'


const defaultState = {
    menuItemsUsed: ["SPORT", "ELEKTRONIKA", "MEBLE"],
    menuItemsNoUsed: ["ELEKTRONIKA", "MEBLE"],
    menuItemsUser: ["ELEKTRONIKA", "MEBLE"]
}

export const reducer = handleActions({

}, defaultState)
