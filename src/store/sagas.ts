import { all, takeLatest, fork, put, delay } from 'redux-saga/effects'
import { ACTIONS } from './consts'
import { actions, Actions } from './actions'

import {categoriesData, mockedProducts} from './mockedData'

export function * fetchCategoriesDataSaga ({ payload }: Actions['fetchCategoriesData']) {
  // pobieranie danych z backendu
  // parsowanie danych i ogolne przygotowywanie
  const data = categoriesData
  yield put(actions.setCategoriesData(data))
}

export function * fetchProductsSaga ({ payload }: Actions['fetchProducts']) {

 const filterProducts= mockedProducts.filter((item)=> payload === item.categoryId) || []
 const data = filterProducts
 yield put(actions.setProducts(data))
}

function * mainSaga () {
  yield all([
    takeLatest(ACTIONS.FETCH_CATEGORIES_DATA, fetchCategoriesDataSaga),
    takeLatest(ACTIONS.FETCH_PRODUCTS, fetchProductsSaga),
  ])
}

export function* indexSaga() {
  yield fork(mainSaga)
}