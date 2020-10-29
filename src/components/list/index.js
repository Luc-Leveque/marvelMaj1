import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CharacterRow from '../characterRow'

const List = () => {
  const [persos, setList] = useState([])
  useEffect(() => {
    axios
      .get(`http://hp-api.herokuapp.com/api/characters `)
      .then(response => {
        setList(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      {persos.map(perso => (
        <CharacterRow name={perso.name} image={perso.image}></CharacterRow>
      ))}
    </div>
  )
}

export default List
