// List rendering method one & Two(making the rendering in a different component and passing it in with props), rendering with key
// using index as a key for lists that don't have ids and other forms of id. 
/*index as a key can only be used when
1. the items in your list do not have a unique id.
2. the list is a static list and will not change.
3. the list will never be reordered or filtered
*/ 
import React from 'react'
import PersonList from './PersonsList'

 function NameList() {
    const persons = [
        {
            id: 1,
            name: "biggy",
            age: 20
        },
        {
            id: 2,
            name: "starky",
            age: 22
        },
        {
            id: 3,
            name: "parkky",
            age: 19
        }
    ]
 
    const names = ["Tony" , "Stark" ,"Daniel"]
    const nameList = names.map(namme => <h3>{namme}</h3>)
    const perssonList = persons.map(person => <PersonList key={person.name} person = {person}/>)
  return (
    <div>
        {/* {nameList} */}
        {perssonList}
    </div>
  )
}
export default NameList