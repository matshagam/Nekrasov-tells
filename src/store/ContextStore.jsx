import React from 'react';

export const Context = React.createContext();

export default class ContextStore extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Context.Provider value={{}}>{this.props.children}</Context.Provider>
    );
  }
}
