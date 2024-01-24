import React from "react";

function SearchBar( { setSearchTerm } ) {

  return (
    <div className="search">
      <input type="text" className="searchTerm" onChange = {(e) => setSearchTerm(e.target.value)} />
    </div>
  );
}

export default SearchBar;