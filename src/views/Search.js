import React, { useEffect, useState, useRef } from 'react'

import Axios from 'axios'
import { Link } from 'react-router-dom'

import { publicKey, timeStamp, hash } from '../utils/getHash'
import CharacterRow from '../components/CharacterRow'

const Search = () => {
  const timer = useRef(false)
  const [resultat, setResultat] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const generateUrl = 'https://gateway.marvel.com/v1/public/characters'

    clearTimeout(timer.current)

    timer.current = setTimeout(() => {
      Axios({
        method: 'GET',
        url: generateUrl,
        params: {
          ts: timeStamp,
          apikey: publicKey,
          hash: hash,
          nameStartsWith: query
        }
      })
        .then(res => {
          setResultat(res.data.data.results)
          console.log('List -> res.data', res.data.data.results)
        })
        .catch(err => {
          console.log(err)
        })
    }, 500)
  }, [query])

  return (
    <div className='App-header'>
      <p>search</p>
      <input type='text' onChange={e => setQuery(e.target.value)}></input>
      {resultat.map(char => (
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

Search.propTypes = {}

export default Search
