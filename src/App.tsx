import React from 'react'
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import GlobalStyles from './Styles/GlobalStyles';
import theme from './Styles/Themes/theme'

const App: React.FC = () => {
  return(
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
