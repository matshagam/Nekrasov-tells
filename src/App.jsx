import React from 'react';

import './styles/App.css';

import Header from './componets/Header/Header.jsx';
import BooksList from './componets/BooksList/BooksList.jsx';
import ToggleView from './componets/ToggleView/ToggleView.jsx';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <ToggleView />
      <BooksList />
    </React.Fragment>
  );
};

export default App;
