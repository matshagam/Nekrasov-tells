import React from 'react';
import { connect } from 'react-redux';

import { changeView } from '../../../actions/ViewAction';

const ToggleButton = ({ changeView, view }) => {
  let listView = 2;

  const onClickChangeView = event => {
    let viewEvent = event.target.innerHTML;

    let windowResized = () => {
      if (window.innerWidth < 480 && viewEvent === 'Список') {
        changeView(false);

        window.removeEventListener('resize', windowResized, false);
      }
    };

    switch (viewEvent) {
      case 'Список':
        window.addEventListener('resize', windowResized, false);
        changeView(true);
        break;
      case 'Плитка':
        window.removeEventListener('resize', windowResized, false);
        changeView(false);
        break;
      default:
        break;
    }
  };

  listView = view.listView ? 1 : 2;

  const VIEW_MODE = [{ id: 1, name: 'Список' }, { id: 2, name: 'Плитка' }];

  return VIEW_MODE.map(({ id, name }) => (
    <button
      disabled={id === listView ? true : false}
      onClick={event => onClickChangeView(event)}
      id={id}
      key={id}
    >
      {name}
    </button>
  ));
};

const mapStateToProps = store => ({
  view: store.listView
});

export default connect(
  mapStateToProps,
  { changeView }
)(ToggleButton);
