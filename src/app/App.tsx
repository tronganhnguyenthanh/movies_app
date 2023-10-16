import {Route, Routes} from "react-router-dom";
import Tab from "../components/Tab";
import "../scss/movies.scss"
import MovieDetail from "../pages/MovieDetail";
const App = () => {
  return (
   <div className="App">
     <Routes>
       <Route path="/" element={<Tab/>}/>
       <Route path="/movie/:id" element={<MovieDetail/>}/>
     </Routes>
   </div>
  );
}

export default App;
