import React from 'react';
import axios from 'axios';

import { URL } from '../helpers/functions';

export const Context = React.createContext();

export default class ContextStore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: '',
      books: [],
      filter: '',
      changeView: false
    };
  }

  componentDidMount() {
    this.getDataFromServer();
  }

  getDataFromServer = () => {
    axios
      .post(URL, { name: this.state.query, book_type: this.state.filter })
      .then(response => {
        // console.log(response);

        this.setState({
          books: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  searchQueryChanged = event => {
    this.setState({ query: event.target.value });
    this.getDataFromServer();
  };

  filterSelectChanged = event => {
    let filterClass = document.querySelector('.filter');
    let activeClass = filterClass.querySelectorAll('.active');
    // console.log('event.target.classList.value: ', event.target.classList.value);

    activeClass.forEach(data => {
      data.classList.remove('active');
    });

    if (event.target.classList.value === 'books') {
      this.setState({
        filter: 1
      });
      event.target.classList.add('active');
      this.getDataFromServer();
    } else if (event.target.classList.value === 'periodicals') {
      this.setState({
        filter: 2
      });

      event.target.classList.add('active');
      this.getDataFromServer();
    } else {
      this.setState({
        filter: ''
      });

      event.target.classList.add('active');
      this.getDataFromServer();
    }
  };

  onClickChangeView = event => {
    let bookCard = document.querySelectorAll('.book');

    bookCard.forEach(book => {
      !book.classList.value.includes('tile-view')
        ? book.classList.add('tile-view')
        : book.classList.remove('tile-view');
    });

    event.target.classList.value.includes('tile')
      ? this.setState({ changeView: true })
      : this.setState({ changeView: false });
  };

  render() {
    // console.log('query: ', this.state.query, 'books: ', this.state.books);
    return (
      <Context.Provider
        value={{
          query: this.state.query,
          books: this.state.books,
          changeView: this.state.changeView,
          searchQueryChanged: this.searchQueryChanged,
          filterSelectChanged: this.filterSelectChanged,
          onClickChangeView: this.onClickChangeView
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
