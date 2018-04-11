import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { Theme, HeaderV2, Footer } from 'hui/src/styled';
import { normalize } from 'polished';
// import logo from './logo.svg';
// import './App.css';

injectGlobal`
  ${normalize()}
  
  * {
    min-height: 0;
    min-width: 0;
    box-sizing: border-box;
  }
  body {
    background: #ECECEC;
  }
  
  html, body, button, input, optgroup, select, textarea {
    font-family: Source Sans Pro, sans-serif;
  }
`;

class App extends Component {
  render() {
    return (
        <ThemeProvider theme={Theme}>
          <HeaderV2 isHomepage siteSource={''} onLoginSuccess={false} />
          <Footer />
        </ThemeProvider>
    );
  }
}

export default App;
