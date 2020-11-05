import React from 'react'
import Name from '../name'

import PropTypes from 'prop-types'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const handleFavorite = hero => {
  const currentFavorite = JSON.parse(localStorage.getItem('favorite')) ?? []

  const isPresent = currentFavorite.map(e => e.id).indexOf(hero.id)

  if (isPresent === -1) {
    currentFavorite.push(hero)
    localStorage.setItem('favorite', JSON.stringify(currentFavorite))
  } else {
    const favEdit = currentFavorite.filter(
      character => character.id !== hero.id
    )
    localStorage.setItem('favorite', JSON.stringify(favEdit))
  }
}

const CharacterRow = props => {
  return (
    <CharacterContainer>
      {/* <Avatar url={props.url}></Avatar> */}
      <Link to={`/Characters/${props.id}`}>
        <Name name={props.name}></Name>
      </Link>
      <button
        onClick={() => handleFavorite({ id: props.id, name: props.name })}
      >
        Favorite
      </button>
    </CharacterContainer>
  )
}

CharacterRow.propTypes = {
  url: PropTypes.string,
  id: PropTypes.number,
  name: PropTypes.string
}

const CharacterContainer = styled.div`
  background-color: ${props => props.theme.secondary};
`

const LienHeroes = styled.a`
  margin: 3px 6px;
  cursor: pointer;
`

export default CharacterRow
