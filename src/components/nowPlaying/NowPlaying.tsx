import {useEffect, useState} from "react"
import axios from "axios"
import ResultList from "../../interface/nowPlaying/Results"
import imageLoading from "../../loading/loading.webp"
const NowPlaying = () => {
  const [nowPlayingList, setNowPlayingList] = useState<ResultList | undefined>()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
   getListMovieNowPlaying()
  },[])
  const getListMovieNowPlaying = async () => {
   let token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmY2RjMGZkY2VkYjliN2YwZDVhZmMxYTQ4ZTJhZmE1MyIsInN1YiI6IjY1MmEzZWI4ZWE4NGM3MDBjYTEwNDk3YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZgDaNDMT3pqZ9RUFb9P8a-JmopUBXs6j40N6"
   let res = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=fcdc0fdcedb9b7f0d5afc1a48e2afa53&language=EN-US", {
    headers:{
     Authorization:"Bearer" + token,
     Accept:"application/json"
    }
   })
   setLoading(!loading)
   setNowPlayingList(res.data)
  }
  return (
   <>
     {
       !loading ? 
        <div className="image-loading">
          <img src={imageLoading} alt=""/>
        </div>
       : 
       nowPlayingList?.results?.map((i, index) => {
       return(
        <div key={index} className="col-2">
          <div className="card">
           <img 
             src={`https://image.tmdb.org/t/p/w440_and_h660_face/${i?.poster_path}`} 
             alt=""
           />
           <h1 className="movie_title" title={i?.original_title}>{i.original_title}</h1>
           <p className="movie_overview" title={i?.overview}>{i.overview}</p>
           <span className="movie_release_date">{i?.release_date}</span>
          </div>
        </div>
       )
      })
     }
   </>
  )
}

export default NowPlaying