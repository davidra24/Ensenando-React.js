import React, { Component } from 'react';
import '../styles/app.css';
import ReactImage from '../images/react.png';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  state = {};
  componentDidMount() {}
  render() {
    return (
      <div>
        <h1>Hola React</h1>
        <img src={ReactImage} alt="react" />
      </div>
    );
  }
}
