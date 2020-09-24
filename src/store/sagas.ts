import { all, takeLatest, fork, put, takeEvery, call } from 'redux-saga/effects'
import ReduxSagaFirebase from 'redux-saga-firebase'

import { ACTIONS } from './consts'
import { actions, Actions } from './actions'

import firebase from 'firebase/app'
import { firebaseApp } from '../firebase'
import { CategoryData, Categories, Products } from './types'

const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp)

export function* fetchCategoriesDataSaga({ payload }: Actions['fetchCategoriesData']) {
  const categoriesDataSnapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'categories')

  const storage = firebase.storage()
  console.log(storage)
  let categoriesData: Categories = []

  categoriesDataSnapshot.forEach(element => {
    categoriesData = element.data().data
  })

  yield put(actions.setCategoriesData(categoriesData))
}



export function* fetchProductsSaga({ payload }: Actions['fetchProducts']) {
  const productsDataSnapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'products')

  let productsData: Products = []

  productsDataSnapshot.forEach(element => {
    productsData = element.data().data
  })

  console.log(productsData, payload)

  const filterProducts = productsData.filter((item) => payload.id === item.categoryId) || []
  const data = filterProducts

  yield put(actions.setProducts(data))
  yield put(actions.setChosenCategory(payload.name))
}

function* mainSaga() {

  yield takeEvery(ACTIONS.FETCH_CATEGORIES_DATA, fetchCategoriesDataSaga)
  yield all([
    takeLatest(ACTIONS.FETCH_CATEGORIES_DATA, fetchCategoriesDataSaga),
    takeLatest(ACTIONS.FETCH_PRODUCTS, fetchProductsSaga)
  ])
}

export function* indexSaga() {

  yield fork(mainSaga)
}