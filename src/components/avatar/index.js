import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Avatar = props => {
  return <AvatarHarryPotter width={100} src={props.image}></AvatarHarryPotter>
}

Avatar.propTypes = {
  image: PropTypes.string
}

const AvatarHarryPotter = styled.img`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.width}px`};
  border-radius: 30px;
`
export default Avatar
