import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import privateKey from '../.secret'
import CharacterRow from '../components/CharacterRow'

import md5 from 'md5'
import Pagination from '../components/pagination'

const Characters = () => {
  const valueOffset = 20

  const [currentPage, setCurrentPage] = useState(0)
  const [total, setTotal] = useState(0)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const publicKey = '5a3ef8fbf8b8bc9c15e221395e38d0e1'
    const timeStamp = new Date().getMilliseconds()
    const hash = md5(`${timeStamp}${privateKey}${publicKey}`)
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
    </div>
  )
}

export default Characters
