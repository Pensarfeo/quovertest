import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './config/store'

require('./config/api')

import App from './app/index'

render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('app'),
)
