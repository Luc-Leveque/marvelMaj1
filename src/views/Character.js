import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import md5 from 'md5'
import privateKey from '../.secret'
import Axios from 'axios'

const Character = props => {
  const [character, setCharacter] = useState([])

  useEffect(() => {
    const publicKey = '5a3ef8fbf8b8bc9c15e221395e38d0e1'
    const timeStamp = new Date().getMilliseconds()
    const hash = md5(`${timeStamp}${privateKey}${publicKey}`)
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
        setCharacter(res.data.data.results)
        console.log('List -> res.data', res.data.data.results)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='App-header'>
      <p>{props.match.params.id}</p>
      <Link to='/'>Login</Link>
    </div>
  )
}

Character.propTypes = {
  match: PropTypes.object
}

export default Character
