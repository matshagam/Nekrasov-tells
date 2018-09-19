import React from 'react';
import { connect } from 'react-redux';

class Description extends React.Component {
  render() {
    console.log('<Description/> render');

    const { description } = this.props;
    const { listView } = this.props.view;

    return listView ? (
      <p
        className="book-text-description"
        style={description === null ? { margin: 'auto', opacity: 0.5 } : null}
      >
        {description !== null ? description : 'Описания нет'}
      </p>
    ) : null;
  }
}

const mapStateToProps = store => ({
  view: store.listView
});

export default connect(
  mapStateToProps,
  null
)(Description);
