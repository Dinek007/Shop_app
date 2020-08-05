import React from 'react'
import ReactDOM from 'react-dom'
import "regenerator-runtime/runtime";

import { Provider } from 'react-redux'
import { configureStore, runSaga } from './store'
import { App } from './App'


const rootElement = document.getElementById('root')
ReactDOM.render(
    <Provider store={configureStore()}>
        <App />
    </Provider>,
    rootElement
)

runSaga()

