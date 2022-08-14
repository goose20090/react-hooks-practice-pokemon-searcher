import React from "react";

function Search({handleSearchChange}) {

  return (
    <div className="ui search">
      <div className="ui icon input">
        <input onChange={handleSearchChange}className="prompt" />
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
