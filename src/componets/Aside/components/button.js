import React from 'react';
import { connect } from 'react-redux';

import { changeView } from '../../../actions/ViewAction';
import {
  VIEW_MODE,
  _toggleClass,
  _toggleAttribute
} from '../../../helpers/functions';

class Button extends React.Component {
  state = {
    view: 2
  };

  onClickChangeView = event => {
    let viewEvent = event.target.innerHTML;
    let mainSection = document.querySelector('.main');
    let mainBooks = mainSection.querySelectorAll('.main .book');

    let windowResized = () => {
      if (window.innerWidth < 480 && viewEvent === 'Список') {
        this.props.changeView(false);

        this.setState({
          view: +event.target.getAttribute('id')
        });

        _toggleClass(mainBooks, 'list-view');
        mainSection.classList.toggle('list-view');

        window.removeEventListener('resize', windowResized, false);
      }
    };

    switch (viewEvent) {
      case 'Список':
        window.addEventListener('resize', windowResized, false);
        this.props.changeView(true);
        break;
      case 'Плитка':
        window.removeEventListener('resize', windowResized, false);
        this.props.changeView(false);
        break;
      default:
        break;
    }

    this.setState({
      view: +event.target.getAttribute('id')
    });

    _toggleClass(mainBooks, 'list-view');
    mainSection.classList.toggle('list-view');
  };

  renderButtons = () => {
    const view = this.state.view;

    return VIEW_MODE.map(name => {
      return (
        <button
          disabled={name.id === view ? true : false}
          onClick={this.onClickChangeView}
          id={name.id}
          key={name.id}
        >
          {name.name}
        </button>
      );
    });
  };

  render() {
    console.log('<Button/> render');
    return <React.Fragment>{this.renderButtons()}</React.Fragment>;
  }
}

export default connect(
  null,
  { changeView }
)(Button);
