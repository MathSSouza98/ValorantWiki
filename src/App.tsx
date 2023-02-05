import React from 'react'
import { ThemeProvider } from 'styled-components';
import Routes from './Routes';
import GlobalStyles from './Styles/GlobalStyles';
import theme from './Styles/Themes/theme'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './services/queryClient';
import { MantineProvider } from '@mantine/core';

const App: React.FC = () => {
  return(
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <GlobalStyles />
          <Routes />
        </MantineProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
