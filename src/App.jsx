import React, { Component } from 'react';
import './styles/App.css';

import ContextStore from './store/ContextStore';

import { Header } from './componets/Header/Header';
import { Main } from './componets/Main/Main.jsx';
import { Aside } from './componets/Aside/Aside.jsx';

class App extends Component {
  render() {
    return (
      <ContextStore>
        <Header />
        <Aside />
        <Main />
      </ContextStore>
    );
  }
}

export default App;
