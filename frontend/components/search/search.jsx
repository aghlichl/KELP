import React from 'react'

const Search = () => {
    return(
        <div className="search-bar">
   
                <input id="find-input" type="text" placeholder="Find" name="Find" />
                <input id="near-input" type="text" placeholder="Near" name="Location" />
                <button className="search-button">
                    <i className="fas fa-search"></i>
                </button>
        </div>
    )
}

export default Search;