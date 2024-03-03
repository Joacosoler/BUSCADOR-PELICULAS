import React from 'react'
import ReactDOM from 'react-dom/client'
import { BuscadorPeliculas } from './BuscadorPeliculas.jsx'
import './styles/movieSearch.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BuscadorPeliculas />
  </React.StrictMode>,
)
