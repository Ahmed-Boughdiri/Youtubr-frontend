import React from "react";
import "../layout/SearchBar.css";
import "../mobile/SearchBar.css";

const SearchBar = () =>{
    return (
        <div className="search-bar">
            <form>
                <div className="input-container">
                    <input type="text" placeholder="YouTube Search ..." />
                </div>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;
