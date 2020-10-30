import React from 'react'
import PropTypes from 'prop-types'

function Character(props) {
  return (
    <div className='App-header'>
      <p>{props.id}</p>
    </div>
  )
}

Character.propTypes = {
  id: PropTypes.string
}

export default Character
