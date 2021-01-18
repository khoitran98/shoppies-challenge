import React, { useState} from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import MuiAlert from '@material-ui/lab/Alert'
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Movies from './components/Movies'
import Nominees from './components/Nominees'
import Search from './components/Search'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      margin: 'auto',
      color: theme.palette.text.secondary,
      whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
    },
    center: {
        textAlign: 'center',
    },
    header: {
        position: 'relative',
        textAlign: 'left',
        bottom: '15px',
        color: '#0000008a'
    }
  }))

const Alert = (props) => {
    return <MuiAlert elevation={6} variant='filled' {...props} />
}

const App = () => {
    const classes = useStyles()
    const api_key = process.env.REACT_APP_API_KEY
    const [movies, setMovies] = useState([])   // list of movies in search results
    const [title,setTitle] = useState('')   // title input
    const [pages,setPages] = useState('')   // page number input
    const [year,setYear] = useState('')    // year input  
    const [cookies, setCookie] = useCookies(['nominees']) // cookies to hold nomination list to browser
    const [nominees, setNominees] = useState(cookies.nominees)   // list of nominated movie
    const [open, setOpen] = useState(false) 
    const [cache, setCache] = useState({})   // cache to hold API requests and responses
    // method to call an API to OMDB with caching functionality
    const searchMovies = (event) => {
        event.preventDefault()
        let url = 'https://www.omdbapi.com/?apikey=' + api_key + '&s=' + title + '&y=' + year + '&page=' + pages + '&type=movie'
        if (cache[url])
        {
            setMovies(cache[url])
        }
        else
        {
            axios
            .get(url)
            .then(response => {
                if (response.data.Response === 'False')
                    return
                console.log(response.data)
                let newCache = {}
                Object.assign(newCache, cache)
                newCache[url] = response.data.Search
                setCache(newCache)
                setMovies(response.data.Search)
                }).catch((error) => {
                    console.error(error)
            })
        }
    }
    const state = {
        regexp : /^[0-9\b]+$/
    }
    // methods to handle input fields change, only allow decimal inputs for year and page number
    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }
    const handleYearChange = (event) => {
        let year = event.target.value
        if (year === '' || state.regexp.test(year)) {
            setYear(event.target.value)
        }
    }
    const handlePagesChange = (event) => {
        let page = event.target.value
        if (page === '' || state.regexp.test(page)) {
            setPages(event.target.value)
        }
    }
    // method to add movie to nomination list
    const nominate = (nominee) => {
        let newNominees = [...nominees]
        newNominees = newNominees.concat(nominee)
        setNominees(newNominees)
        setOpen(newNominees.length === 5)
        setCookie('nominees',newNominees, { path: '/' })
    } 
    // method to remove nominee from the nomination list
    const removeNominee = (removedNominee) => {
        let newNominees = [...nominees]
        newNominees = newNominees.filter(nominee => nominee.imdbID !== removedNominee.imdbID)
        setNominees(newNominees)
        setCookie('nominees',newNominees, { path: '/' })
    }
    // method to close the banner
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return
        }
        setOpen(false)
    }
    // clear the input fields and the search results
    const reset = () => {
        setMovies([])
        setYear('')
        setPages('')
        setTitle('')
    }
    return (
        <div className={classes.root}>
            <h1 className={classes.center} > Shoppies </h1>
                <Grid justify='center' container spacing={3}>
                    <Grid className={classes.center} item xs={11} md={10} lg={9} xl={8}>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls='panel1a-content'
                            id='panel1a-header'
                            >
                                <h2 className={classes.header} > Nomination List ({ nominees && nominees.length}) </h2>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Nominees nominees = {nominees} removeNominee = {removeNominee}/>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    <Grid className={classes.center} item xs={11} md={10} lg={9} xl={8}>
                        <Paper className={classes.paper}> 
                            <Search handleTitleChange = {handleTitleChange} handlePagesChange = {handlePagesChange} handleYearChange = {handleYearChange} title = {title} pages= {pages} year = {year} search = {searchMovies} reset = {reset}/> 
                        </Paper>
                    </Grid>
                <Grid className={classes.center} item xs={11} md={10} lg={9} xl={8}>
                    <Paper className={classes.paper}>
                        <h2 className = {classes.header}> Search Results </h2>
                        <Movies movies = {movies} nominate = {nominate} nominees = {nominees} />
                    </Paper>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity='success'>
                    You have reached the maximum of 5 nominations!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default App
