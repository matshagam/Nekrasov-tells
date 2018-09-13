import React, { Component } from 'react';
import './styles/App.css';

import ContextStore from './store/ContextStore';
import { Header } from './componets/Header.jsx';

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
