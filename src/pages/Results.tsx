import React,{ useState } from "react";
import "../layout/Results.css";
import SearchBar from "../components/SearchBar";
import ResultsContainer from "../components/ResultsContainer";
import Preview from "../components/Preview";


const Results = () =>{
    const [preview,setPreview] = useState(false);
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
