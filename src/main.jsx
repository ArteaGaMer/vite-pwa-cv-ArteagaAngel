import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Content from './Content'
import Tecs from './Tecs'
import Education from './Education'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Content />
    <Education />
    <Tecs />
    
  </React.StrictMode>,
)