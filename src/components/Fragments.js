/*
Using fragments instead of divs or other tags to put your jsx
when you give an empty tags, its also a fragment just that it doesn't accept keys
The only props react fragments accept so far is the key attribute
*/
import React from 'react'

function Fragments() {
    const items = [
        {id:1, name:'tonyy'},
        {id:2, name: 'Udoka'}
    ]
  return (
    <>
        {
            items.map( item => (
                <React.Fragment key={item.id}>
                    <h3>{`I am ${item.name} and I am good`}</h3>

                </React.Fragment>
            ))
        }
    </>
  )
}

export default Fragments