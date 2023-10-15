import {useState} from "react"
import NowPlaying from "./nowPlaying/NowPlaying"
import TopRated from "./topRated/TopRated"
const Tab = () => {
  const [nowPlaying, setNowPlaying] = useState(false)
  const [topRated, setTopRated] = useState(false)
  const handleClickNowPlaying = () => {
   setNowPlaying(!nowPlaying)
   setTopRated(false)
  }
  const handleClickTopRated = () => {
   setTopRated(!topRated)
   setNowPlaying(false)
  }
  return (
   <>
    <div className="col-4">
      <div className="btn-group-action">
        <button className="btn-now-playing" onClick={handleClickNowPlaying}>Now Playing</button>
        <button className="btn-top-rated" onClick={handleClickTopRated}>Top rated</button>
      </div>
    </div>
    {
      nowPlaying ? <div className="col-8">
       <div className="tab-content">
         <NowPlaying/>
       </div>
     </div> 
     : 
     ""
    }
    {
      topRated ? <div className="col-8">
        <div className="tab-content">
          <TopRated/>
        </div>
      </div>
      :
      ""
    }
   </>
  )
}

export default Tab