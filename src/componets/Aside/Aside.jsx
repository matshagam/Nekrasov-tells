import React from 'react';
import { connect } from 'react-redux';

import { changeView } from '../../actions/ViewAction';
import {
  VIEW_MODE,
  _toggleClass,
  _toggleAttribute
} from '../../helpers/functions';
import { Button } from '../reusable/Button';

class Aside extends React.Component {
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
        this.props.changeView(true);

        _toggleAttribute(asideButtons, 'Плитка', 'disabled', 'disabled');
        _toggleClass(mainBooks, 'list-view');
        mainSection.classList.toggle('list-view');

        window.removeEventListener('resize', windowResized, false);
      }
    };

    switch (viewEvent) {
      case 'Список':
        window.addEventListener('resize', windowResized, false);
        this.props.changeView(false);
        break;
      case 'Плитка':
        window.removeEventListener('resize', windowResized, false);
        this.props.changeView(true);
        break;
      default:
        break;
    }

    _toggleAttribute(asideButtons, viewEvent, 'disabled', 'disabled');
    _toggleClass(mainBooks, 'list-view');
    mainSection.classList.toggle('list-view');
  };

  render() {
    return (
      <aside className="aside">
        {VIEW_MODE.map((name, i) => {
          return (
            <Button toggleButton={this.onClickChangeView} name={name} key={i} />
          );
        })}
      </aside>
    );
  }
}

export default connect(
  null,
  { changeView }
)(Aside);
