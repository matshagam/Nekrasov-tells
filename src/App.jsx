import React, { Component } from 'react';
import './styles/App.css';

import ContextStore from './store/ContextStore';
import { Header } from './componets/Header.jsx';
import { Search } from './componets/Search.jsx';
import { Filter } from './componets/Filter.jsx';

class App extends Component {
  render() {
    return (
      <ContextStore>
        <Header />
        <Search />
        <Filter />
      </ContextStore>
    );
  }
}

export default App;
