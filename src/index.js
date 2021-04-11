import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme.js";

// ---- PÁGINAS
import Home from './pages/home.js';
import NewTeam from './pages/new-team.js';

// ---- CSS
import './assets/css/main.css';

// ---- COMPONENTES 
import ScrollToTop from './components/ScrollToTop.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <Router>

        <ScrollToTop />

          <Header />

            <main>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/new-team">
                  <NewTeam/>
                </Route>
              </Switch>
            </main>

          <Footer />

      </Router>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);