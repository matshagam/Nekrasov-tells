import React from 'react';

export const Context = React.createContext();

export default class ContextStore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  render() {
    console.log(this.state.query);

    return (
      <Context.Provider
        value={{ query: this.state.query, handleChange: this.handleChange }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}
