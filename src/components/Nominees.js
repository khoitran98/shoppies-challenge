import React from 'react'
import Nominee from './Nominee'

// Component for all 5 nominated movies
const Nominees = (props) => {
    return ( 
        <ul>
            {props.nominees.map((nominee, i) => 
            <Nominee key={i} nominee = {nominee} removeNominee = {props.removeNominee} />
            )}
        </ul>
    )
}
export default Nominees