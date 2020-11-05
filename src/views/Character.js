import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Character = props => {
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
