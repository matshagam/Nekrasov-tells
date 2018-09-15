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
    if (!this.state.book) this.getDataFromServer();
    if (!this.state.listView) this.windowResized();
  }

  windowResized = () => {
    window.addEventListener('resize', () => {
      let mainClass = document.querySelector('.main');
      let changeBookClass = mainClass.querySelectorAll('.book');

      let asideClass = document.querySelector('.aside');
      let tile = asideClass.querySelector('.tile');
      let list = asideClass.querySelector('.list');

      if (window.innerWidth < 480 && list.className.includes('active')) {
        changeBookClass.forEach(data => {
          data.classList.remove('active');
        });

        mainClass.classList.remove('active');
        list.classList.remove('active');
        tile.classList.add('active');
      }
    });
  };

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

    if (!value.includes('active')) {
      changeClass.forEach(data => {
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

    if (!event.target.className.includes('active')) {
      changeButtonClass.forEach(data => {
        data.classList.remove('active');
      });

      this.setState({
        listView: !this.state.listView
      });
    }

    if (event.target.classList.value.includes('list')) {
      mainClass.classList.add('active');
      changeBookClass.forEach(data => {
        data.classList.add('active');
      });
    } else {
      mainClass.classList.remove('active');
      changeBookClass.forEach(data => {
        data.classList.remove('active');
      });
    }

    event.target.classList.add('active');
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
