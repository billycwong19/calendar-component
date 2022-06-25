import React, { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from './GlobalStyles/GlobalStyle'
import { lightTheme, darkTheme } from './GlobalStyles/Theme'

import Calendar from './Calendar'

const App = () => {
  const [themeState, setThemeState] = useState('light')
  const changeThemeState = () => themeState === 'light' ? setThemeState('dark') : setThemeState('light')

  return (
    <>
      <ThemeProvider theme={ themeState === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />

          <Calendar />
          <button onClick={() => changeThemeState()}>theme</button>

      </ThemeProvider>
    </>
  )
}

export default App