import React,{ useState,useEffect } from "react";
import "../layout/Results.css";
import SearchBar from "../components/SearchBar";
import ResultsContainer from "../components/ResultsContainer";
import Preview from "../components/Preview";
import getVideos from "../global/getVideos";
import { searchValue, setSearchValue } from "../global/searchValue";


const Results = () =>{
    const [preview,setPreview] = useState(false);
    const [results, setResults] = useState([]);
    const [loaded,setLoaded] = useState(false);
    const [hasLoaded,setHasLoaded] = useState(false);
    const [openedVideo,setOpenedVideo] = useState({});
    const [searchBarValue,setSearchBarValue] = useState("");
    const getResults = async() =>{
        const res = await getVideos(searchValue)
        return setResults(res)
    }
    useEffect(() =>{
        if(!loaded || !hasLoaded) {
            getResults();
            console.log(results)
            console.log(searchValue)
            setLoaded(true)
            if(loaded) {
                setHasLoaded(true)
            }
        }
    },[results]);
    const openPreview = (data:any) =>{
        setOpenedVideo(data);
        setPreview(true);
    }
    const handleSubmit = (e:any) =>{
        e.preventDefault();
        setSearchValue(searchBarValue)
        getResults();
    }
    return(
        <div className="results">
            <h2>YouTubr</h2>
            {
                // TODO: Working on The Search Bar
            }
            <SearchBar value={searchBarValue} handleChange={(e:any) =>setSearchBarValue(e)} onClick={handleSubmit} />
            <ResultsContainer open={openPreview} videos={results} />
            {
                (preview) && <Preview close={() =>setPreview(false)} data={openedVideo} />
            }
        </div>
    )
}

export default Results; 
