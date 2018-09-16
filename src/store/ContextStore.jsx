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
    if (this.state.books) this.getDataFromServer();

    document.querySelector('.tile').setAttribute('disabled', 'disabled');
    document.querySelector('.anywhere').setAttribute('disabled', 'disabled');
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
    let thisEvent = event.target.classList;

    let filterSection = document.querySelector('.filter');
    let filterButtons = filterSection.querySelectorAll('button');

    if (thisEvent.value.includes('books')) {
      this.setState(
        {
          filter: 1
        },
        () => {
          this.getDataFromServer();
        }
      );
    } else if (thisEvent.value.includes('periodicals')) {
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

    _toggleClass(filterButtons, thisEvent, 'active', true);
    _toggleAttribute(filterButtons, 'disabled', 'disabled', true);
  };

  onClickChangeView = event => {
    let thisEvent = event.target.classList;

    let mainSection = document.querySelector('.main');
    let mainBooks = mainSection.querySelectorAll('.book');

    let asideSection = document.querySelector('.aside');
    let asideButtons = asideSection.querySelectorAll('button');

    let windowResized = () => {
      if (window.innerWidth < 480 && this.state.listView) {
        _toggleClass(
          asideButtons,
          document.querySelector('.tile').classList,
          'active',
          true
        );

        this.setState({
          listView: !this.state.listView
        });

        _toggleAttribute(asideButtons, 'disabled', 'disabled', true);
        _toggleClass(mainBooks, '', 'active');

        window.removeEventListener('resize', windowResized, false);
      }
    };

    _toggleClass(asideButtons, thisEvent, 'active', true);

    if (thisEvent.value.includes('list')) {
      window.addEventListener('resize', windowResized, false);
    }

    if (thisEvent.value.includes('tile')) {
      window.removeEventListener('resize', windowResized, false);
    }

    _toggleAttribute(asideButtons, 'disabled', 'disabled', true);
    _toggleClass(mainBooks, '', 'active');

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
