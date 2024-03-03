
export const useFetchPeliculas = ({ endPoint }) => {

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

    useEffect(() => {
        fetchPeliculas()
    }, [endPoint])
    return {
        results,
    }       
}
