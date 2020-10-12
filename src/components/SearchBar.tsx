import React from "react";
import "../layout/SearchBar.css";
import "../mobile/SearchBar.css";
import { Link } from "react-router-dom";

const SearchBar:React.FC<any> = ({ value, handleChange, onClick,goTo }) =>{
    return (
        <div className="search-bar">
            <form>
                <div className="input-container">
                    <input type="text" placeholder="YouTube Search ..." value={value} onChange={handleChange} />
                </div>
                <button type="submit" onClick={onClick}>
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchBar;
