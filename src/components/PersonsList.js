import React from 'react'

function PersonList({person}) {
    
  return (
    <div>
        <h3> I am {person.name}, I'm {person.age} years old</h3>
    </div>
  )
}

export default PersonList