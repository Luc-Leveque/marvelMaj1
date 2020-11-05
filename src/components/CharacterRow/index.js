import React from 'react'
import Name from '../name'

import PropTypes from 'prop-types'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const CharacterRow = props => {
  return (
    <CharacterContainer>
      {/* <Avatar url={props.url}></Avatar> */}
      <Link to={`/Characters/${props.id}`}>
        <Name name={props.name}></Name>
      </Link>
    </CharacterContainer>
  )
}

CharacterRow.propTypes = {
  url: PropTypes.string,
  key: PropTypes.number,
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
