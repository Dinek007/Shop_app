import { handleActions } from 'redux-actions'
import produce from 'immer'

import { ACTIONS } from './consts'


const defaultState = {
    menuItemsUsed: ["TENIS", "JOGING", "MUZIC", "FURNITURE", "ELECTRONICS", "BOOKS"],
    menuItemsNoUsed: ["MUZIC", "FURNITURE", "ELECTRONICS", "BOOKS"],
    menuItemsUser: ["MUZIC", "FURNITURE", "ELECTRONICS", "BOOKS"]
}

export const reducer = handleActions({

}, defaultState)
