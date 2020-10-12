import React,{ useState,useEffect } from "react";
import "../layout/Results.css";
import SearchBar from "../components/SearchBar";
import ResultsContainer from "../components/ResultsContainer";
import Preview from "../components/Preview";
import getVideos from "../global/getVideos";
import { searchValue } from "../global/searchValue";


const Results = () =>{
    const [preview,setPreview] = useState(false);
    const [results, setResults] = useState([]);
    const getResults = async() =>{
        const res = await getVideos(searchValue)
        setResults(res)
    }
    useEffect(() =>{
        getResults()
        console.log(results)
    },[])
    return(
        <div className="results">
            <h2>YouTubr</h2>
            <SearchBar />
            <ResultsContainer open={() =>setPreview(true)} />
            {
                (preview) && <Preview close={() =>setPreview(false)} />
            }
        </div>
    )
}

export default Results; 
