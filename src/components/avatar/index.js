import React from 'react'
import styled from 'styled-components'

const Avatar = props => {
  return <AvatarHarryPotter width={100} src={props.image}></AvatarHarryPotter>
}

const AvatarHarryPotter = styled.img`
  width: ${props => `${props.width}px`};
  height: ${props => `${props.width}px`};
  border-radius: 30px;
`
export default Avatar
