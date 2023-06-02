import { useEffect } from "react";
import "./App.css";
import Cards from "./Component/Cards/Cards";
import Carousell from "./Component/Carousel/Carousel";
import { capsule } from "./Function/function";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Component/Navbar/Navbar";
import {Routes,Route} from "react-router-dom"
import Search from "./Component/Search/Search";
import Details from "./Component/Details/Details";


function App() {
  const dispatch = useDispatch()
  const data = useSelector((state) => {
    return state.capsule;
  });

  useEffect(() => {
    if (data.length === 0) {
      capsule(dispatch);
    }
  }, []);
  
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<><Navbar/><Carousell /><Cards data={data} /></>}/>
        <Route path="/search/:name" element={<><Navbar/><Carousell /><Search/></>}/>
        <Route path="/details/:id" element={<><Navbar/><Details/></>}/>
      </Routes>
      
      
      
      
    </div>
  );
}

export default App;
