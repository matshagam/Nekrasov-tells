import React from 'react';
import { connect } from 'react-redux';

import { changeView } from '../../../actions/ViewAction';
import {
  VIEW_MODE,
  _toggleClass,
  _toggleAttribute
} from '../../../helpers/functions';

class Button extends React.Component {
  componentDidMount() {
    document
      .querySelector('.aside')
      .children[1].setAttribute('disabled', 'disabled');
  }

  onClickChangeView = event => {
    let viewEvent = event.target.innerHTML;
    let mainSection = document.querySelector('.main');
    let mainBooks = mainSection.querySelectorAll('.main .book');
    let asideButtons = document.querySelectorAll('.aside button');

    let windowResized = () => {
      if (window.innerWidth < 480 && viewEvent === 'Список') {
        this.props.changeView(false);

        _toggleAttribute(asideButtons, 'Плитка', 'disabled', 'disabled');
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

    _toggleAttribute(asideButtons, viewEvent, 'disabled', 'disabled');
    _toggleClass(mainBooks, 'list-view');
    mainSection.classList.toggle('list-view');
  };

  render() {
    console.log('<Button/> render');

    return VIEW_MODE.map(name => {
      return (
        <button onClick={this.onClickChangeView} id={name.id} key={name.id}>
          {name.name}
        </button>
      );
    });
  }
}

export default connect(
  null,
  { changeView }
)(Button);
