import React from 'react'

// Component for a single nominated movie
const Nominee = ({nominee, removeNominee}) => {
    return (
    <div>
      <div> {nominee.Title} </div> 
      <div> {nominee.Year}</div>
      <button onClick = {() => removeNominee(nominee)}> Remove </button>
    </div>
    )
}
export default Nominee