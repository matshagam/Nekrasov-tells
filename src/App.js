import React, { Component } from 'react';

import './styles/App.css';

import { Header } from './componets/Header/Header.jsx';
import Main from './componets/Main/Main.jsx';
import Aside from './componets/Aside/Aside.jsx';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  searchQueryChanged = event => {
    const { query } = this.state;
    this.setState({ query: event.target.value }, () => {
      if (query.length > 1 || query.length < 1) this.getDataFromServer();
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          query={this.state.query}
          searchQueryChanged={this.searchQueryChanged}
        />
        <Aside />
        <Main />
      </React.Fragment>
    );
  }
}
