import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import CharacterRow from '../components/CharacterRow'

const Favorite = () => {
  const [favorite, setFavorite] = useState(
    JSON.parse(localStorage.getItem('favorite'))
  )

  return (
    <div className='App-header'>
      <p>Favorite</p>
      {favorite.map(char => (
        <CharacterRow
          key={char.id}
          id={char.id}
          name={char.name}
          // url={char.image}
        >
          {char}
        </CharacterRow>
      ))}
      <Link to='/Characters'>Liste des heros</Link>
      <Link to='/'>Login</Link>
    </div>
  )
}

Favorite.propTypes = {}

export default Favorite
