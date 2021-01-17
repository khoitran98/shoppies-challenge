import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'


// Component for the Search Bar
const Search = (props) => {
    return(
        <form onSubmit = {props.search}>
            <div>
                Search movies on OMDB: <input value = {props.searchValue} onChange = {props.handleSearchChange} />
            </div>
        </form>
    )
    // <form noValidate autoComplete="off">
    //             <TextField id="filled-basic" label="Filled" variant="filled" />
    //             <TextField id="filled-basic" label="Filled" variant="filled" />
    //             <TextField id="filled-basic" label="Filled" variant="filled" />
    //             <Button> Search </Button>
    // </form>
}

export default Search