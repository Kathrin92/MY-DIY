import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import Login from '../src/pages/Login';
import Signup from '../src/pages/Signup';
import Selection from '../src/pages/Selection';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/projects/new">
          <Selection />
        </Route>
        <Route exact path="/projects">
          <div>Alle Projekte</div>
        </Route>
        <Route exact path="/projects/:projectId">
          <div>Bestimmtes Projekt</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
