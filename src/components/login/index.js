import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import logo from '../../assets/800px-MarvelLogo.svg.png'

const Login = ({ submit }) => {
  Login.propTypes = {
    submit: PropTypes.object
  }
  const history = useHistory()
  const [formState, setformState] = useState({ username: '', password: '' })
  const [errorMessage, setErrorMessage] = useState('')

  return (
    <div>
      <section>
        <Container
          onSubmit={e => submit(e, formState, setErrorMessage, history)}
        >
          <Image src={logo} />
          <div>
            <Input
              type='text'
              placeholder='Entrez votre identifiant'
              required='required'
              onChange={e =>
                setformState({ ...formState, username: e.target.value })
              }
            />
          </div>
          <div>
            <Input
              type='password'
              placeholder='Entrez votre mot de passe'
              required='required'
              onChange={e =>
                setformState({ ...formState, password: e.target.value })
              }
            />
          </div>
          <Button type='submit' id='submit' value='Envoyer' />
          <p>{errorMessage}</p>
        </Container>
      </section>
    </div>
  )
}

const Image = styled.img`
  height: 150px;
  width: 341px;
  margin-bottom: 10px;
  border-radius: 5px;
`

const Input = styled.input`
  height: 40px;
  width: 300px;
  font-size: 18px;
  margin-bottom: 10px;
  border-radius: 5px;
  padding-left: 35px;
  background: white;
`

const Button = styled.input`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export default Login
