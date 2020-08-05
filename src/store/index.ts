import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { indexSaga } from './sagas'

import { reducer } from './reducers'

export const sagaMiddleware = createSagaMiddleware()

export const configureStore = () => {
    return createStore(
        reducer, composeWithDevTools(applyMiddleware(sagaMiddleware))
    );
}
export const runSaga = () => { sagaMiddleware.run(indexSaga) }