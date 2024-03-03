import { useState, useEffect } from "react"


export const BuscadorPeliculas = () => {

    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = 'c7f2f215ef45fdbbadd5abdd2ce8999f'

    const [busqueda, setBusqueda] = useState('')
    const [peliculas, setPeliculas] = useState([])


    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }


    const fetchPeliculas = async () => {
        try {
            const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}&language=es`)
            const { results } = await response.json()
            // sólo seteamos el valor de peliculas si existe results y este es un Array y tiene datos
            if (Array.isArray(results) && results.length) {
                setPeliculas(results)
            }
        } catch (error) {
            console.error("Ha ocurrido un error: ", error)
        }

    }


    return (

        <div className="container">

            <h1 className="title"> Buscador de Peliculas</h1>
            <form onSubmit={handleSubmit}><input
                type="text"
                placeholder="Escribi una pelicula"
                value={busqueda}
                onChange={handleInputChange}
            />
                < button type="submit" className="search-button">Buscar</button>
            </form>

            <div className="movie-list">
                {peliculas.map((pelicula) => (
                    <div key={pelicula.id} className="movie-card">
                        <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
                        <h2>{pelicula.title}</h2>
                        <p>{pelicula.overview}</p>
                      
                    </div>

                ))}

            </div>

        </div>

    )
}
