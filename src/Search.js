import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input
          type="text"
          placeholder="Search for a city"
          className="searchBox"
          id="search-box"
        />
        <input type="submit" value="Search" className="searchBtn" />
      </form>
    </div>
  );
}
