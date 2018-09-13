import React, { Component } from 'react';
import './App.css';

import ContextStore from './store/ContextStore';
import { Header } from './componets/Header';

class App extends Component {
  render() {
    return (
      <ContextStore>
        <Header />
      </ContextStore>
    );
  }
}

export default App;
