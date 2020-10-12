import React, { useState } from "react";
import "../layout/Search.css";
import "../mobile/Search.css";
import SearchBar from "../components/SearchBar";
import { setSearchValue } from "../global/searchValue";

const Search:React.FC<any> = ({ history }) => {
  const [search, setSearch] = useState<any>("");
  const handleSearch = async (e: any) => {
    e.preventDefault();
    setSearchValue(search);
    history.push("/results")
  };
  return (
    <div className="search">
      <div className="search-form">
        <h2>YouTubr</h2>
        <p>
          With YouTubr You Can Download Any Video From YouTube Smoothly, Quickly
          Without Any Problem
        </p>
        <SearchBar
          value={search}
          handleChange={(e: any) => setSearch(e.target.value)}
          onClick={handleSearch}
        />
        <div className="suggestions">
          <div className="suggs-container">
            <div className="sugg">
              <p>Music</p>
            </div>
            <div className="sugg">
              <p>Football</p>
            </div>
            <div className="sugg">
              <p>Movie</p>
            </div>
            <div className="sugg">
              <p>Mohamed Salah</p>
            </div>
            <div className="sugg">
              <p>Gaming</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
