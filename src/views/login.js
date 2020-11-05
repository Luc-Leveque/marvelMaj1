import Axios from 'axios'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import FormLogin from '../components/login'
import './App.css'

const submit = (e, formState, setErrorMessage, history) => {
  e.preventDefault()

  Axios({
    method: 'POST',
    url: 'https://easy-login-api.herokuapp.com/users/login',
    data: {
      username: formState.username,
      password: formState.password
    }
  })
    .then(res => {
      localStorage.setItem('token', res.headers['x-access-token'])
      history.push('/characters')
    })
    .catch(err => {
      setErrorMessage('une erreur')
      console.log(err)
    })
}

const Login = ({ history }) => {
  Login.propTypes = {
    history: PropTypes.object
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      history.push('/characters')
    }
  }, [])
  return (
    <div className='App-header'>
      <FormLogin submit={submit}></FormLogin>
    </div>
  )
}

export default Login
