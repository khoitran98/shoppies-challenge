import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import ButtonBase from '@material-ui/core/ButtonBase'
const useStyles = makeStyles((theme) => ({
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}))

// Component for a single nominated movie
const Nominee = ({nominee, removeNominee}) => {
  const classes = useStyles()
  // change to default image if poster fails to load
  const defaultImageUrl = 'https://nelowvision.com/wp-content/uploads/2018/11/Picture-Unavailable.jpg' 
  const addDefaultSrc = (e) => {
    e.target.src = defaultImageUrl
  }
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm = {3}>
          <ButtonBase>
            <img onError={addDefaultSrc} className={classes.img} alt='complex' src= {nominee.Poster} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm = {9} container>
          <Grid item xs container direction='column' spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant='subtitle1'>
                {nominee.Title}
              </Typography>
              <Typography variant='body2' gutterBottom>
                Year: {nominee.Year}
              </Typography>
              <Typography variant='body2' color='textSecondary'>
                IMDb ID: {nominee.imdbID}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12} sm = {3}>
            <Button onClick ={() => removeNominee(nominee)} variant='contained'> Remove </Button>
          </Grid>
        </Grid>
      </Grid>
    </div>
  )
}
export default Nominee