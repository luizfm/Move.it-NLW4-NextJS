import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '../styles/global';
import { darkTheme, lightTheme } from '../styles/Theme';
import { ToggleThemeProvider } from '../contexts/ToggleThemeContext';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState('light');
  
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme} >
          <ToggleThemeProvider themeToggler={themeToggler} theme={theme}>
            <GlobalStyles />
            <Component {...pageProps} />
          </ToggleThemeProvider>
        </ThemeProvider>
  )
}

export default MyApp
