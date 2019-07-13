import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'

import './config/ReactotronConfig'
import Routes from './routes'
import store from './store'

import Header from './components/Header'
import GlobalStyle from './styles/globals'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes />
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
      </BrowserRouter>
    </Provider>
  )
}

export default App
