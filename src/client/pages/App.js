import React, { Component } from 'react';
import '../styles/loading.css';
import '../styles/app.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Register from './register/Register';
import RegisterNew from './register/RegisterNew';
import RegisterEdit from './register/RegisterEdit';
import NotFound from '../components/notFound/NotFound';
import RegisterDetailsContainer from './register/RegisterDetailsContainer';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  componentDidMount() {}
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={props => <Register {...props} api="/api/registro" />}
          />
          <Route
            exact
            path="/new"
            component={props => <RegisterNew {...props} api="/api/registro" />}
          />
          <Route
            exact
            path="/:id"
            component={props => (
              <RegisterDetailsContainer {...props} api="/api/registro" />
            )}
          />
          <Route
            exact
            path="/:id/edit"
            component={props => <RegisterEdit {...props} api="/api/registro" />}
          />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    );
  }
}
