import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { FavContextProvider } from './store/fav-context'

ReactDOM.render(
    <FavContextProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </FavContextProvider>,
    document.getElementById('root')
)