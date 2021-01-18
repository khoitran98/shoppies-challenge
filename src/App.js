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
    const [movies, setMovies] = useState([])
    const [title,setTitle] = useState('') 
    const [pages,setPages] = useState('')
    const [year,setYear] = useState('')  
    const [cookies, setCookie] = useCookies(['nominees'])
    const [nominees, setNominees] = useState(cookies.nominees)
    const [open, setOpen] = useState(false) 
    const searchMovies = (event) => {
        event.preventDefault()
        axios
            .get('http://www.omdbapi.com/?apikey=' + api_key + '&s=' + title + '&y=' + year + '&page=' + pages + '&type=movie' + '&plot=full')
            .then(response => {
                if (response.data.Response === 'False')
                    return
                console.log(response.data)
                setMovies(response.data.Search)
                }).catch((error) => {
                    console.error(error)
                })
    }
    const state = {
        regexp : /^[0-9\b]+$/
    }
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
    const nominate = (nominee) => {
        let newNominees = [...nominees]
        newNominees = newNominees.concat(nominee)
        setNominees(newNominees)
        setOpen(newNominees.length === 5)
        setCookie('nominees',newNominees, { path: '/' })
    } 
    const removeNominee = (removedNominee) => {
        let newNominees = [...nominees]
        newNominees = newNominees.filter(nominee => nominee.imdbID !== removedNominee.imdbID)
        setNominees(newNominees)
        setCookie('nominees',newNominees, { path: '/' })
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return
        }
        setOpen(false)
    }
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
                                <h2 className={classes.header} > Nomination List ({nominees.length}) </h2>
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
