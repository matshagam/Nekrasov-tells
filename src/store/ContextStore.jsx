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
    document.querySelector('.tile').disabled = true;
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
    let changeButtonClass = filterClass.querySelectorAll('button');
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
      changeButtonClass.forEach(data => {
        data.classList.remove('active');
      });
    }

    event.target.classList.add('active');
  };

  onClickChangeView = event => {
    let mainClass = document.querySelector('.main');
    let changeBookClass = mainClass.querySelectorAll('.book');

    let asideClass = document.querySelector('.aside');
    let changeButtonClass = asideClass.querySelectorAll('button');

    let windowResized = () => {
      if (window.innerWidth < 480 && this.state.listView) {
        _toggleAttribute(changeButtonClass);
        _toggleClass(changeButtonClass);
        _toggleClass(changeBookClass);

        mainClass.classList.remove('active');

        this.setState({
          listView: !this.state.listView
        });
      }
    };

    if (!event.target.className.includes('active')) {
      _toggleClass(changeButtonClass);
    }

    if (event.target.classList.value.includes('list')) {
      window.addEventListener('resize', windowResized, false);
      mainClass.classList.add('active');
    }

    if (event.target.classList.value.includes('tile')) {
      window.removeEventListener('resize', windowResized, false);
      mainClass.classList.remove('active');
    }

    event.target.classList.add('active');

    _toggleAttribute(changeButtonClass);
    _toggleClass(changeBookClass);

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
          filterSelectChanged: this.filterSelectChanged,
          onClickChangeView: this.onClickChangeView
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
