import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { Theme, HeaderV2, Footer } from 'hui/dist/styled';

import { normalize } from 'polished';

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

const PageContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  min-width: 320px;
`;

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

class App extends Component {


  render() {
    return (
      <ThemeProvider theme={Theme}>
          <PageContainer>
            <HeaderV2 isHomepage={true} />
              <Main>
              </Main>
            <Footer />
          </PageContainer>
      </ThemeProvider>
    );
  }
}

export default App;
