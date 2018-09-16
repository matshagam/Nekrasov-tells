import React from 'react';
import axios from 'axios';

import { URL, _toggleAttribute, _toggleClass } from '../helpers/functions';

export const Context = React.createContext();

export default class ContextStore extends React.Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);

    this.state = {
      query: '',
      books: [],
      filter: '',
      listView: false
    };
  }

  componentDidMount() {
    if (this.state.books) this.getDataFromServer();

    ['.anywhere', '.tile'].forEach(val => {
      document.querySelector(val).setAttribute('disabled', 'disabled');
    });
  }

  getDataFromServer = () => {
    const { query, filter } = this.state;
    axios
      .post(URL, { name: query, book_type: filter })
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
    let filterEvent = event.target.classList;
    let filterButtons = document.querySelectorAll('.filter button');

    if (filterEvent.value.includes('books')) {
      this.setState(
        {
          filter: 1
        },
        () => {
          this.getDataFromServer();
        }
      );
    } else if (filterEvent.value.includes('periodicals')) {
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

    _toggleAttribute(filterButtons, filterEvent, 'disabled', 'disabled');
  };

  onClickChangeView = event => {
    let viewEvent = event.target.classList;
    let mainBooks = document.querySelectorAll('.main .book');
    let asideButtons = document.querySelectorAll('.aside button');

    let windowResized = () => {
      let tileButton = document.querySelector('.tile').classList;

      if (window.innerWidth < 480 && this.state.listView) {
        this.setState(state => ({
          listView: !state.listView
        }));

        _toggleAttribute(asideButtons, tileButton, 'disabled', 'disabled');
        _toggleClass(mainBooks, 'active');

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
    _toggleClass(mainBooks, 'active');

    this.setState(state => ({
      listView: !state.listView
    }));
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
