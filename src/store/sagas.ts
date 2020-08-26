import { all, takeLatest, fork, put, takeEvery } from 'redux-saga/effects'
import { ACTIONS } from './consts'
import { actions, Actions } from './actions'

import { categoriesData, mockedProducts } from './mockedData'

export function* fetchCategoriesDataSaga({ payload }: Actions['fetchCategoriesData']) {
  // pobieranie danych z backendu
  // parsowanie danych i ogolne przygotowywanie
  console.log('jestem tu')
  const data = categoriesData
  yield put(actions.setCategoriesData(data))
}

export function* fetchProductsSaga({ payload }: Actions['fetchProducts']) {
  const filterProducts = mockedProducts.filter((item) => payload.id === item.categoryId) || []
  const data = filterProducts
  yield put(actions.setProducts(data))
  yield put(actions.setChosenCategory(payload.name))
}

function* mainSaga() {
  console.log('saga dziala albno nie dzial')

  yield takeEvery(ACTIONS.FETCH_CATEGORIES_DATA, fetchCategoriesDataSaga)
  yield all([
    takeLatest(ACTIONS.FETCH_CATEGORIES_DATA, fetchCategoriesDataSaga),
    takeLatest(ACTIONS.FETCH_PRODUCTS, fetchProductsSaga)
  ])
}

export function* indexSaga() {
  console.log('saga dziala albno nie dzial')
  yield fork(mainSaga)
}