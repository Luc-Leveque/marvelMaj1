import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

import './index.css'
import App from './screens/app'
import * as serviceWorker from './serviceWorker'

import { themeLight, themeDark } from './config/themes'

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${props => props.theme.secondary}
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
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register()
