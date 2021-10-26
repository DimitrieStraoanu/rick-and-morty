import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import theme, { GlobalStyles } from './theme'
import { ThemeProvider } from 'styled-components'
import Homepage from 'pages/home'
import CharacterPage from 'pages/character'

const App: React.FC = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <Router>
      <Switch>
        <Route exact path={'/'} component={Homepage} />
        <Route exact path={'/character:id'} component={CharacterPage} />
      </Switch>
    </Router>
  </ThemeProvider>
)

export default App
