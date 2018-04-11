import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider, injectGlobal } from 'styled-components';
import { Theme, HeaderV2, Footer } from 'hui/dist/styled';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home } from './containers/home';
import { Success } from './containers/success';
import { Message } from './containers/message';
import { Feedback } from './containers/feedback';
import { Competition } from './containers/competition';

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

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={Theme}>
          <div>
            <HeaderV2 isHomepage={true} />
              <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/success" component={Success} />
                    <Route path="/message" component={Message} />
                    <Route path="/feedback" component={Feedback} />
                    <Route path="/competition" component={Competition} />
                </div>
              </Router>
            <Footer />
          </div>
      </ThemeProvider>
    );
  }
}

export default App;
