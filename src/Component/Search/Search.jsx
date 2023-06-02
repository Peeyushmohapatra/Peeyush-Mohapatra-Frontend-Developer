import React from "react";
import "./Search.css";
import { useSelector } from "react-redux";
import Cards from "../Cards/Cards";


const Search = () => {

    const data = useSelector((state) => {
        return state.search
    })
  return <div className="search">
    {data.length !==0 ? <Cards data={data}/> : <h1 style={{color:"white",textAlign:"center"}}>Data Not Found</h1>}
    
  </div>;
};

export default Search;
