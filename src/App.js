import React, { useState} from 'react'
import Movies from './components/Movies'
import Nominees from './components/Nominees'
import Search from './components/Search'
import axios from 'axios'
import { useCookies } from 'react-cookie'

const App = () => {
    const api_key = process.env.REACT_APP_API_KEY
    const [movies, setMovies] = useState([])
    const [searchValue,setSearchValue] = useState('') 
    const [cookies, setCookie] = useCookies(['nominees'])
    const [nominees, setNominees] = useState(cookies.nominees)
    const searchMovies = (event) => {
        event.preventDefault()
        axios
            .get('http://www.omdbapi.com/?apikey=' + api_key + '&s=' + searchValue + '&type=movie')
            .then(response => {
                if (response.data.Response === 'False')
                    return
                console.log(response.data)
                setMovies(response.data.Search)
                }).catch((error) => {
                    console.error(error)
                })
    }
    const handleSearchChange = (event) => {
        setSearchValue(event.target.value)
    }
    const nominate = (nominee) => {
        let newNominees = [...nominees]
        newNominees = newNominees.concat(nominee)
        setNominees(newNominees)
        setCookie('nominees',newNominees, { path: '/' })
    } 
    const removeNominee = (removedNominee) => {
        let newNominees = [...nominees]
        newNominees = newNominees.filter(nominee => nominee.imdbID !== removedNominee.imdbID)
        setNominees(newNominees)
        setCookie('nominees',newNominees, { path: '/' })
    }
    return (
        <div>
            <Search handleSearchChange = {handleSearchChange} searchValue = {searchValue} search = {searchMovies}/>
            <h2> Nomination list </h2>
            <Nominees nominees = {nominees} removeNominee = {removeNominee}/>
            <h2> Search Results </h2>
            <Movies movies = {movies} nominate = {nominate} nominees = {nominees} />
        </div>
    )
}

export default App
