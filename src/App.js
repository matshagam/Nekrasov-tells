import React from 'react';

import './styles/App.css';

import { Header } from './componets/Header/Header.jsx';
import Main from './componets/Main/Main.jsx';
import Aside from './componets/Aside/Aside.jsx';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Aside />
      <Main />
    </React.Fragment>
  );
};

export default App;
