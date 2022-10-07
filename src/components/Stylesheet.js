/*Different methods of styling
giving the className from the css direct (h1 tag)
second: passing a method to the classname with props (h2)
multiple classes (h2)

inline styling (p) no need to import css
*/
import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
    let className = props.primary? 'primary' : ''

    const paragraph = {
        fontSize: '25px',
        backgroundColor: 'red'
    }
  return (
    <div>
        <h1 className='primary'>Hello CSS </h1>
        <h2 className={`${className} secondary`} >This is CSS</h2>
        <p style={paragraph}>This is inline styling</p>
    </div>
  )
}

export default Stylesheet