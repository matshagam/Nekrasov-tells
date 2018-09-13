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
    axios
      .post(URL, { name: this.state.query, book_type: this.state.filter })
      .then(response => {
        console.log(response);

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
    console.log('event.target.classList.value: ', event.target.classList.value);
    if (event.target.classList.value === 'books') {
      this.setState({
        filter: 1
      });
      this.getDataFromServer();
    } else if (event.target.classList.value === 'periodicals') {
      this.setState({
        filter: 2
      });
      this.getDataFromServer();
    } else {
      this.setState({
        filter: ''
      });
      this.getDataFromServer();
    }
  };

  render() {
    console.log('query: ', this.state.query, 'books: ', this.state.books);
    return (
      <Context.Provider
        value={{
          query: this.state.query,
          searchQueryChanged: this.searchQueryChanged,
          filterSelectChanged: this.filterSelectChanged
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
