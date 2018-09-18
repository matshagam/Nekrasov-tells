import React, { Component } from 'react';

import { _toggleAttribute, _toggleClass } from './helpers/functions';

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

  componentDidMount() {
    document
      .querySelector('.filter')
      .children[0].setAttribute('disabled', 'disabled');
    document
      .querySelector('.aside')
      .children[1].setAttribute('disabled', 'disabled');
  }

  searchQueryChanged = event => {
    const { query } = this.state;
    this.setState({ query: event.target.value }, () => {
      if (query.length > 1 || query.length < 1) this.getDataFromServer();
    });
  };

  onClickChangeView = event => {
    let viewEvent = event.target.classList;
    let mainSection = document.querySelector('.main');
    let mainBooks = mainSection.querySelectorAll('.main .book');
    let asideButtons = document.querySelectorAll('.aside button');

    let windowResized = () => {
      let tileButton = document.querySelector('.tile').classList;

      if (window.innerWidth < 480 && this.state.listView) {
        this.setState(state => ({
          listView: !state.listView
        }));

        _toggleAttribute(asideButtons, tileButton, 'disabled', 'disabled');
        _toggleClass(mainBooks, 'list-view');
        mainSection.classList.toggle('list-view');

        window.removeEventListener('resize', windowResized, false);
      }
    };

    if (viewEvent.value.includes('list')) {
      window.addEventListener('resize', windowResized, false);
    }

    if (viewEvent.value.includes('tile')) {
      window.removeEventListener('resize', windowResized, false);
    }

    _toggleAttribute(asideButtons, viewEvent, 'disabled', 'disabled');
    _toggleClass(mainBooks, 'list-view');
    mainSection.classList.toggle('list-view');

    this.setState(state => ({
      listView: !state.listView
    }));
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
