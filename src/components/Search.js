import React from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'


// Component for the Search Bar
const Search = (props) => {
    return (
        <div>
            <h2> Search for movies on OMDB</h2>
            <Grid container spacing={2}>
                <Grid item xs ={12} md = {8} >
                    <TextField label='Title' variant='filled' fullWidth value = {props.title} onChange = {props.handleTitleChange} />
                </Grid>    
                    <Grid item xs={6} md = {2} >
                    <TextField fullWidth label='Page (1-100)' variant='filled' value = {props.pages} onChange = {props.handlePagesChange} />
                </Grid>
                <Grid item xs={6} md = {2}>
                    <TextField fullWidth label='Year' variant='filled' value = {props.year} onChange = {props.handleYearChange} />
                </Grid>
                <Grid item xs={12}>
                    <Button size='small' variant='contained' onClick = {props.search}> Search </Button>
                    <Button size='small' variant='contained' onClick = {props.reset}> Reset </Button>
                </Grid>       
            </Grid>
        </div>
    )
}

export default Search