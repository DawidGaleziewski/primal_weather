import React from 'react';
import './App.scss';

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';

// Router
import MainRouter from '@Router/MainRouter'

// Styles
import theme from './style/MuiTheme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  );
}

export default App;
