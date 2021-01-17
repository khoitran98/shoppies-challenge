import React from 'react'

// Component for the Search Bar
const Search = (props) => {
    return(
        <form onSubmit = {props.search}>
            <div>
                Search movies on OMDB: <input value = {props.searchValue} onChange = {props.handleSearchChange} />
            </div>
        </form>
    )
}

export default Search