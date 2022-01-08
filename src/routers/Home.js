
    import React, {useState, useEffect} from "react"
    import {Link } from "react-router-dom";
    import styles from "./home.module.css"
    import Header from "./header";
    function Home() {
    const [loading,setLoading] = useState(true)
    const [movies,setMovies] = useState([])
    const getMovies = async() => {
        const response = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
        const json = await response.json()
        setMovies(json.data.movies)
        setLoading((current) => !current)
    }
    useEffect(()=>{
        getMovies()
    },[])
    
    return (
        <div className="App">
            <Header />
           <div className ={styles.contentwrapper}>
        {loading ? <h1>Loading</h1> : movies.map((item) => 
        <div key ={item.id} className={styles.content}>
            <Link to = {`/movie/${item.id}`}><img src={item.medium_cover_image} alt="Movie images"/></Link>
            <Link to = {`/movie/${item.id}`}><div className={styles.movietext}>
            <h2>{item.title}</h2>
            <p className={styles.summary}>줄거리 : {item.summary.slice(0,160)} ...</p>
            <span>별점 : {item.rating}</span>
            <span>상영시간 : {item.runtime}분</span>
            <p>개봉일 : {(item.date_uploaded.split("")).slice(0,10)}</p>
            </div>
            </Link>
            
        </div>
        
        )}
        </div>
        </div>
    );
    }
    export default Home ;