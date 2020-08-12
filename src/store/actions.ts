import { createAction } from 'redux-actions'

import { ACTIONS } from './consts'
import { ActionsType, Categories, Products, CategoryData } from './types'

export const actions = {
  fetchCategoriesData: createAction(ACTIONS.FETCH_CATEGORIES_DATA, (data: number) => data),
  setCategoriesData: createAction(ACTIONS.SET_CATEGORIES_DATA, (data: Categories) => data),
  fetchProducts: createAction(ACTIONS.FETCH_PRODUCTS, (data: CategoryData) => data),
  setProducts: createAction(ACTIONS.SET_PRODUCTS, (data: Products) => data),
  setChosenCategory: createAction(ACTIONS.SET_CHOSEN_CATEGORY, (data: string) => data),
}

export type Actions = ActionsType<typeof actions>
