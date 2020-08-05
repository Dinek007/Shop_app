import { createAction } from 'redux-actions'

import { ACTIONS } from './consts'
import { ActionsType, Categories, Products } from './types'

export const actions = {
  fetchCategoriesData: createAction(ACTIONS.FETCH_CATEGORIES_DATA, (data: number) => data),
  setCategoriesData: createAction(ACTIONS.SET_CATEGORIES_DATA, (data: Categories) => data),
  fetchProducts: createAction(ACTIONS.FETCH_PRODUCTS, (data: number) => data),
  setProducts: createAction(ACTIONS.SET_PRODUCTS, (data: Products) => data),
}

export type Actions = ActionsType<typeof actions>
