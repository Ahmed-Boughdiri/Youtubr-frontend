import React from "react";
import "../layout/Search.css";
import "../mobile/Search.css";
import SearchBar from "../components/SearchBar";

const Search = () =>{
    return(
        <div className="search">
            <div className="search-form">
                <h2>YouTubr</h2>
                <p>With YouTubr You Can Download Any Video From YouTube Smoothly, Quickly Without Any Problem</p>
                <SearchBar />
                <div className="suggestions">
                    <div className="suggs-container">
                        <div className="sugg"><p>Music</p></div>
                        <div className="sugg"><p>Football</p></div>
                        <div className="sugg"><p>Movie</p></div>
                        <div className="sugg"><p>Mohamed Salah</p></div>
                        <div className="sugg"><p>Gaming</p></div>        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;
