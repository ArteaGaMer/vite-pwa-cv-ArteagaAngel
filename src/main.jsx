import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Content from './Content'
import Tecs from './Tecs'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Content />
    <Tecs />
  </React.StrictMode>,
)
if('serviceWorker' in navigator)
{
    console.log("Puedes usar el service worker");
    //Configuración del Service Worker
    navigator.serviceWorker.register('./sw.js')
                    .then(res => console.log("SW cargado correctamente",res))
                    .catch(err => console.log("Service Worker No se ha podido registrar",err));

}
else
{
    console.log("No se puede usar el service worker");
}