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
      filter: ''
    };
  }

  componentDidMount() {
    this.getDataFromServer();
  }

  getDataFromServer = () => {
    console.log(this.state.filter, this.state.query);

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
      if (this.state.query.length > 1) {
        this.getDataFromServer();
      } else if (this.state.query.length < 1) {
        this.getDataFromServer();
      }
    });
  };

  filterSelectChanged = event => {
    let filterClass = document.querySelector('.filter');
    let changeClass = filterClass.querySelectorAll('.active');

    if (event.target.classList.value.includes('books')) {
      this.setState({
        filter: 1
      });
    } else if (event.target.classList.value.includes('periodicals')) {
      this.setState({
        filter: 2
      });
    } else {
      this.setState({
        filter: ''
      });
    }

    !event.target.className.includes('active')
      ? changeClass.forEach(data => {
          data.classList.remove('active');
        })
      : null;

    event.target.classList.add('active');

    this.getDataFromServer();
  };

  onClickChangeView = event => {
    let mainClass = document.querySelector('.main');
    let asideClass = document.querySelector('.aside');
    let changeClass = asideClass.querySelectorAll('.active');

    !event.target.className.includes('active')
      ? changeClass.forEach(data => {
          data.classList.remove('active');
        })
      : null;

    event.target.classList.value.includes('tile')
      ? mainClass.classList.add('active')
      : mainClass.classList.remove('active');

    event.target.classList.add('active');
  };

  render() {
    return (
      <Context.Provider
        value={{
          query: this.state.query,
          books: this.state.books,
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
