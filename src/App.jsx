import React, { Component } from 'react';
import './styles/App.css';

import ContextStore from './store/ContextStore';

import { Header } from './componets/Header/Header';
import { Main } from './componets/Main/Main.jsx';

class App extends Component {
  render() {
    return (
      <ContextStore>
        <Header />
        <Main />
      </ContextStore>
    );
  }
}

export default App;
