import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Tutors from './user/tutor/pages/Tutors';
import MainHeader from './shared/Navigation/MainHeader';
import HomePage from './home/pages/HomePage';
import Footer from './shared/footer/footer.component';

import './App.scss';

function App() {
  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route path="/tutors" exact>
          <Tutors />
        </Route>
        <Route to="/">
          <HomePage />
        </Route>
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
