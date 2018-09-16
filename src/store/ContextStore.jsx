import React from 'react';
import axios from 'axios';

import { URL, _toggleAttribute, _toggleClass } from '../helpers/functions';

export const Context = React.createContext();

export default class ContextStore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      books: [],
      filter: '',
      listView: false
    };
  }

  componentDidMount() {
    if (!this.state.book) this.getDataFromServer();
    document.querySelector('.tile').setAttribute('disabled', 'disabled');
  }

  getDataFromServer = () => {
    axios
      .post(URL, { name: this.state.query, book_type: this.state.filter })
      .then(response => {
        this.setState({
          books: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  searchQueryChanged = event => {
    this.setState({ query: event.target.value }, () => {
      this.state.query.length > 1
        ? this.getDataFromServer()
        : this.getDataFromServer();
    });
  };

  onClickChangeFilter = event => {
    let filterSection = document.querySelector('.filter');
    let filterButtons = filterSection.querySelectorAll('button');
    let value = event.target.classList.value;

    if (value.includes('books')) {
      this.setState(
        {
          filter: 1
        },
        () => {
          this.getDataFromServer();
        }
      );
    } else if (value.includes('periodicals')) {
      this.setState(
        {
          filter: 2
        },
        () => {
          this.getDataFromServer();
        }
      );
    } else {
      this.setState(
        {
          filter: ''
        },
        () => {
          this.getDataFromServer();
        }
      );
    }

    if (!value.includes('active')) {
      _toggleClass(filterButtons, 'active', 'remove');
    }

    event.target.classList.add('active');
  };

  onClickChangeView = event => {
    let mainSection = document.querySelector('.main');
    let mainBooks = mainSection.querySelectorAll('.book');

    let asideSection = document.querySelector('.aside');
    let asideButtons = asideSection.querySelectorAll('button');

    let windowResized = () => {
      if (window.innerWidth < 480 && this.state.listView) {
        _toggleAttribute(asideButtons, 'disabled', 'disabled');
        _toggleClass(asideButtons, 'active', 'toggle');
        _toggleClass(mainBooks, 'active', 'toggle');

        mainSection.classList.remove('active');

        this.setState({
          listView: !this.state.listView
        });
      }
    };

    _toggleClass(asideButtons, 'active', 'toggle');

    if (event.target.classList.value.includes('list')) {
      window.addEventListener('resize', windowResized, false);
      mainSection.classList.add('active');
    }

    if (event.target.classList.value.includes('tile')) {
      window.removeEventListener('resize', windowResized, false);
      mainSection.classList.remove('active');
    }

    event.target.classList.add('active');

    _toggleAttribute(asideButtons, 'disabled', 'disabled');
    _toggleClass(mainBooks, 'active', 'toggle');

    this.setState({
      listView: !this.state.listView
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          query: this.state.query,
          books: this.state.books,
          listView: this.state.listView,
          searchQueryChanged: this.searchQueryChanged,
          onClickChangeFilter: this.onClickChangeFilter,
          onClickChangeView: this.onClickChangeView
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
