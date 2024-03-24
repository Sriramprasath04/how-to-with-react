import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {data} from "./assets/data";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App data={data}/>
  </React.StrictMode>,
)
