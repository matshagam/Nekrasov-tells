import React from 'react';
import { connect } from 'react-redux';

import { changeView } from '../../../actions/ViewAction';
import { VIEW_MODE } from '../../../helpers/functions';

class Button extends React.Component {
  state = {
    view: 2
  };

  onClickChangeView = event => {
    let viewEvent = event.target.innerHTML;

    let windowResized = () => {
      if (window.innerWidth < 480 && viewEvent === 'Список') {
        this.props.changeView(false);

        this.setState({
          view: +event.target.getAttribute('id')
        });

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
  };

  renderButtons = () => {
    const view = this.state.view;

    return (
      <React.Fragment>
        {VIEW_MODE.map(({ id, name }) => (
          <button
            disabled={id === view ? true : false}
            onClick={this.onClickChangeView}
            id={id}
            key={id}
          >
            {name}
          </button>
        ))}
      </React.Fragment>
    );
  };

  render() {
    console.log('in ToggleView <Button/> render');
    return this.renderButtons();
  }
}

export default connect(
  null,
  { changeView }
)(Button);
