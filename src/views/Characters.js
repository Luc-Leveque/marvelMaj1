import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import CharacterRow from '../components/CharacterRow'

import { publicKey, timeStamp, hash } from '../utils/getHash'

import Pagination from '../components/pagination'
import { Link } from 'react-router-dom'

const Characters = () => {
  const valueOffset = 20

  const [currentPage, setCurrentPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const generateUrl = 'https://gateway.marvel.com/v1/public/characters'

    Axios({
      method: 'GET',
      url: generateUrl,
      params: {
        ts: timeStamp,
        apikey: publicKey,
        hash: hash,
        offset: valueOffset * currentPage
      }
    })
      .then(res => {
        setCharacters(res.data.data.results)
        setTotal(res.data.data.total)
        console.log('List -> res.data', res.data.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [currentPage])

  return (
    <div>
      {characters.map(char => (
        <CharacterRow
          key={char.id}
          id={char.id}
          name={char.name}
          // url={char.image}
        >
          {char}
        </CharacterRow>
      ))}
      <Pagination
        total={total}
        setCurrentPage={setCurrentPage}
        valueOffset={valueOffset}
      ></Pagination>

      <Link to='/search'>
        <p>Rechercher un heros</p>
      </Link>
      <Link to='/favorite'>
        <p>List des favorie</p>
      </Link>
    </div>
  )
}

export default Characters
