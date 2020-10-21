import { all, takeLatest, fork, put, takeEvery, call } from 'redux-saga/effects'
import ReduxSagaFirebase from 'redux-saga-firebase'

import { ACTIONS } from './consts'
import { actions, Actions } from './actions'
import { firebaseApp } from '../firebase'
import { Categories, Products } from './types'

const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp)

export function* fetchCategoriesDataSaga({ payload }: Actions['fetchCategoriesData']) {
  const categoriesDataSnapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'categories')

  let categoriesData: Categories = []

  categoriesDataSnapshot.forEach(element => {
    categoriesData = element.data().data
  })

  yield put(actions.setCategoriesData(categoriesData))
}

function* fetchImage(path: string) {
  const firebaseStorage = reduxSagaFirebase.storage

  return yield call(firebaseStorage.getDownloadURL, path)
}

export function* fetchProductsSaga({ payload }: Actions['fetchProducts']) {
  const productsDataSnapshot = yield call(reduxSagaFirebase.firestore.getCollection, 'products')

  let productsData: Products = []

  productsDataSnapshot.forEach(element => {
    productsData = element.data().data
  })

  const filterProducts = productsData.filter((item) => payload.id === item.categoryId) || []
  let data: Products = []

  for (const element of filterProducts) {
    data = [
      ...data, {
        ...element,
        imageUrl: yield* fetchImage(`/products/${payload.id}/item${element.id}.png`)
      }
    ]
  }

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