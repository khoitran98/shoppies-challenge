import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
const useStyles = makeStyles((theme) => ({
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  }
}))
// Component for a single movie in search results
const Movie = ({movie, nominate, nominees, }) => {
  const classes = useStyles()
  // A function to check for whether this movie has already been nominated
  const isDisabled = (movie) => {
    let nominee = null
    if (nominees.length > 0)
      nominee = nominees.find(nominee => nominee.imdbID === movie.imdbID)
    return (nominee != null || nominees.length === 5)
  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt='complex' src= {movie.Poster} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction='column' spacing={2}>
            <Grid item xs>
              <Typography color='textPrimary' gutterBottom variant='subtitle1'>
                {movie.Title}
              </Typography>
              <Typography color='textPrimary' variant='body2' gutterBottom>
                Year: {movie.Year}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                IMDb ID: {movie.imdbID}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Button disabled = {isDisabled(movie)} onClick ={() => nominate(movie)} variant='contained'> Nominate </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}

export default Movie