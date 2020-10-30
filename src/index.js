import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import './index.css'
import * as serviceWorker from './serviceWorker'

import { themeLight, themeDark } from './config/themes'

import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useLocation
} from 'react-router-dom'

import App from './views/App'
import Characters from './views/Characters'
import Character from './views/Character'

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //background-color: ${props => props.theme.secondary}
}

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={themeDark}>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path='/'>
            <App />
          </Route>
          <Route exact path='/characters'>
            <Characters />
          </Route>
          <Route path='/characters/:id'>
            <Child />
          </Route>
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

function Child() {
  let { id } = useParams()

  return (
    <div>
      <Character id={id} />
    </div>
  )
}

function NoMatch() {
  let location = useLocation()

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}

serviceWorker.register()
