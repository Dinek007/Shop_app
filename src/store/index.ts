import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import { indexSaga } from './sagas'
import { reducer } from './reducers'

export const sagaMiddleware = createSagaMiddleware()
const middleWares = applyMiddleware(sagaMiddleware)

export const configureStore = () => {

    return createStore(
        reducer, composeWithDevTools(middleWares)
    );
}

export const store = configureStore()
sagaMiddleware.run(indexSaga)