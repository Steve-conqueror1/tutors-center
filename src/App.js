import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import Tutors from './pages/tutor/pages/Tutors';
import MainHeader from './shared/Navigation/MainHeader';
import HomePage from './pages/home/pages/HomePage';
import Footer from './shared/footer/footer.component';
import Register from './pages/registration/registration.component';
import { FirebaseContext, withFirebase } from './contexts/Firebase';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null,
    };
  }

  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged((authUser) => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }

  render() {
    return (
      <Router>
        <MainHeader authUser={this.state.authUser} />
        <Switch>
          <Route path="/tutors" exact={true}>
            <FirebaseContext.Consumer>
              {(firebase) => <Tutors firebase={firebase} />}
            </FirebaseContext.Consumer>
          </Route>
          <Route path="/register" exact={true}>
            <FirebaseContext.Consumer>
              {(firebase) => <Register firebase={firebase} />}
            </FirebaseContext.Consumer>
          </Route>
          <Route path="/" exact={true}>
            <HomePage />
          </Route>
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

export default withFirebase(App);
