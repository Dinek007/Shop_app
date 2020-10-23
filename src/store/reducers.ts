import { handleActions } from 'redux-actions'
import produce from 'immer'

import { ACTIONS } from './consts'
import { Categories, Products, CheckboxNames } from './types'
import { Actions } from './actions'

type CategoriesData = {
    data: Categories;
    isLoading: boolean;
}

type ProductsData = {
    data: Products;
    isLoading: boolean;
}

type ChosenCategory = string;

export class ReduxState {
    categories: CategoriesData = {
        data: [],
        isLoading: false
    }
    products: ProductsData = {
        data: [],
        isLoading: false
    }
    chosenCategory: ChosenCategory = "SELECT CATEGORIES"
    checkboxNames: CheckboxNames = {
        WOMAN: true,
        MEN: true,
        'EX-DISPLAY': true,
        NEW: true,
        USED: true,
    }
}

const defaultState = { ...new ReduxState() }

export const reducer = handleActions<ReduxState, any>({
    [ACTIONS.SET_CATEGORIES_DATA]: (state, { payload }: Actions['setCategoriesData']) =>
        produce(state, draft => {
            draft.categories.data = payload
            draft.categories.isLoading = false
        }),
    [ACTIONS.FETCH_CATEGORIES_DATA]: (state) =>
        produce(state, draft => {
            draft.categories.data = defaultState.categories.data
            draft.categories.isLoading = true
        }),
    [ACTIONS.SET_PRODUCTS]: (state, { payload }: Actions['setProducts']) =>
        produce(state, draft => {
            draft.products.data = payload
            draft.products.isLoading = false
        }),
    [ACTIONS.FETCH_PRODUCTS]: (state) =>
        produce(state, draft => {
            draft.products.data = defaultState.products.data
            draft.products.isLoading = true
        }),
    [ACTIONS.SET_CHOSEN_CATEGORY]: (state, { payload }: Actions['setChosenCategory']) =>
        produce(state, draft => {
            draft.chosenCategory = payload
        }),
    [ACTIONS.FILTER_PRODUCTS]: (state, { payload }: Actions['filterProducts']) =>
        produce(state, draft => {
            const { value } = payload
            draft.checkboxNames[payload.fieldName] = value
        })
}, defaultState)
