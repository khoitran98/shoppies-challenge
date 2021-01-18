import React from 'react'
import Nominee from './Nominee'
import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles((theme) => ({
    fullWidth: {
        width: '100%'
    }
}))
// Component for all 5 nominated movies
const Nominees = (props) => {
    const classes = useStyles()
    return ( 
        <ul className = {classes.fullWidth}>
            {props.nominees && props.nominees.map((nominee, i) => 
            <Nominee key={i} nominee = {nominee} removeNominee = {props.removeNominee} />
            )}
        </ul>
    )
}
export default Nominees