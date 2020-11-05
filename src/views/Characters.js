import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import CharacterRow from '../components/CharacterRow'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    Axios.get('http://hp-api.herokuapp.com/api/characters')
      .then(res => {
        setCharacters(res.data)
        console.log('List -> res.data', res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      {characters.map(char => (
        <CharacterRow
          key={char.id}
          name={char.name}
          url={char.image}
        ></CharacterRow>
      ))}
    </div>
  )
}

export default Characters
