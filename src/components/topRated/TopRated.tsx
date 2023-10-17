import { useEffect, useState } from "react"
import TopRateMovieList from "../../interface/topRatedMovies/TopRateMovieList"
import axios from "axios"
import imageLoading from "../../loading/loading.webp"
import moment from "moment"
const TopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<TopRateMovieList | undefined>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    getTopRatedMovies()
  }, [])
  const getTopRatedMovies = async () => {
    let token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2RjMGZkY2VkYjliN2YwZDVhZmMxYTQ4ZTJhZmE1MyIsInN1YiI6IjY1MmEzZWI4ZWE4NGM3MDBjYTEwNDk3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZgDaNDMT3pqZ9RUFb9P8a-JmopUBXs6j40N6"
    let res = await axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=fcdc0fdcedb9b7f0d5afc1a48e2afa53&language=EN-US", {
      headers: {
        Authorization: "Bearer" + token,
        Accept: "application/json"
      }
    })
    setLoading(!loading)
    setTopRatedMovies(res.data)
  }
  return (
    <>
      {
        !loading ? 
         <div className="image-loading">
           <img src={imageLoading} alt=""/>
         </div>
        : 
        topRatedMovies?.results?.map((i, index) => {
         return (
          <div className="col-2" key={index}>
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w440_and_h660_face/${i?.poster_path}`}
                alt=""
              />
              <h2 title={i?.original_name}>{i?.original_name}</h2>
              <p title={i?.overview}>{i?.overview}</p>
              <span>{moment(i?.first_air_date).format("MMMM Do, YYYY")}</span>
              <div className="voted-movie">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-check" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
                <div className="vote">{Number(i?.vote_average)}</div>
              </div>
            </div>
          </div>
        )
      })
      }
    </>
  )
}

export default TopRated