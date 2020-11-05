import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Axios from 'axios'

import { publicKey, timeStamp, hash } from '../utils/getHash'

const Character = props => {
  const [character, setCharacter] = useState({})

  useEffect(() => {
    const generateUrl = `https://gateway.marvel.com/v1/public/characters/${props.match.params.id}`

    Axios({
      method: 'GET',
      url: generateUrl,
      params: {
        ts: timeStamp,
        apikey: publicKey,
        hash: hash
      }
    })
      .then(res => {
        setCharacter(res.data.data.results[0])
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='App-header'>
      <p>
        {props.match.params.id} {character.name}
      </p>
      <Link to='/Characters'>Liste des heros</Link>
      <Link to='/'>Login</Link>
    </div>
  )
}

Character.propTypes = {
  match: PropTypes.object
}

export default Character
