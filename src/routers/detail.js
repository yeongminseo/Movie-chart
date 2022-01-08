import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


const Details = () => {
    const usep = useParams()
    const [movie,setMovie] = useState("")
    const getMovies = async () => {
        const response = await fetch (`https://yts.mx/api/v2/movie_details.json?movie_id=${usep.id}`)
        const json = await response.json()
        setMovie(json.data.movie)
    }
    useEffect(() => getMovies() ,[])
    console.log(movie)
    return(
        <div>
            <h1>{movie.title}</h1>
            <img src = {movie.large_cover_image} alt="movieimg"></img>
            <p>{movie.description_full}</p>
        </div>
    )
}

export default Details