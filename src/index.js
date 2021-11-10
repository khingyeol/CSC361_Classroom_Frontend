import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom'
import Homepage from './containers/Homepage'
import Classfeed from './containers/Classfeed'
import Layout from './layouts/Layout'

const AppWithRouter = () => (
  <BrowserRouter>
    <Layout>
      <Route exact path="/" component={Homepage}></Route>

    </Layout>
  </BrowserRouter>
)

ReactDOM.render(<AppWithRouter />, document.getElementById('root'))

reportWebVitals()
