import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import "../src/index.css"
import {BrowserRouter} from 'react-router-dom'
import AppContainer from './AppContainer'


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContainer/>
  </StrictMode>,
)