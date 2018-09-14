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
      listView: false
    };
  }

  componentDidMount() {
    this.getDataFromServer();
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

  filterSelectChanged = event => {
    let filterClass = document.querySelector('.filter');
    let changeClass = filterClass.querySelectorAll('button');
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

    !value.includes('active')
      ? changeClass.forEach(data => {
          data.classList.remove('active');
        })
      : null;

    event.target.classList.add('active');
  };

  onClickChangeView = event => {
    let mainClass = document.querySelector('.main');
    let asideClass = document.querySelector('.aside');
    let changeClass = asideClass.querySelectorAll('button');

    !event.target.className.includes('active')
      ? (changeClass.forEach(data => {
          data.classList.remove('active');
        }),
        this.setState({
          listView: !this.state.listView
        }))
      : null;

    event.target.classList.value.includes('list')
      ? mainClass.classList.add('active')
      : mainClass.classList.remove('active');

    event.target.classList.add('active');
  };

  render() {
    console.log(this.state.listView);

    return (
      <Context.Provider
        value={{
          query: this.state.query,
          books: this.state.books,
          listView: this.state.listView,
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
