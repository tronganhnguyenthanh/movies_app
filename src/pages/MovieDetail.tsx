import {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import axios from "axios"
import movieDetail from "../interface/movieDetail/movieDetail"
const MovieDetail = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [detailNowPlaying, setDetailNowPlaying] = useState<movieDetail | undefined>()
    useEffect(() => {
     viewDetail(id)
    }, [id])
    const goBack = () => {
     navigate("/")
    }
    const viewDetail = async (id: any) => {
      let token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2RjMGZkY2VkYjliN2YwZDVhZmMxYTQ4ZTJhZmE1MyIsInN1YiI6IjY1MmEzZWI4ZWE4NGM3MDBjYTEwNDk3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZgDaNDMT3pqZ9RUFb9P8a-JmopUBXs6j40N6"
      let res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=fcdc0fdcedb9b7f0d5afc1a48e2afa53&language=EN-US`, {
        headers:{
          Authorization:"Bearer" + token,
          Accept:"application/json"
        }
       })
       setDetailNowPlaying(res?.data);
    }
    return (
        <div className="movie-detail">
            <div className="movie-content">
                <img src={`https://image.tmdb.org/t/p/w440_and_h660_face/${detailNowPlaying?.poster_path}`} alt="" />
                <br />
                <h1 className="movie_detail_title">{detailNowPlaying?.original_title}</h1>
                <p className="movie_detail_overview">{detailNowPlaying?.overview}</p>
                <span className="movie_detail_release_date">{detailNowPlaying?.release_date}</span>
                <button className="btn-back" onClick={goBack}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-bar-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M12.5 15a.5.5 0 0 1-.5-.5v-13a.5.5 0 0 1 1 0v13a.5.5 0 0 1-.5.5ZM10 8a.5.5 0 0 1-.5.5H3.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L3.707 7.5H9.5a.5.5 0 0 1 .5.5Z" />
                  </svg>
                </button>
            </div>
        </div>
    )
}

export default MovieDetail