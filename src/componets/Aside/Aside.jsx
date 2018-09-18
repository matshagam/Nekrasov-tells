import React from 'react';

import { VIEW_MODE } from '../../helpers/functions';

import { Button } from '../reusable/Button';

class Aside extends React.Component {
  render() {
    return (
      <aside className="aside">
        {VIEW_MODE.map((name, i) => {
          return <Button name={name} key={i} />;
        })}
      </aside>
    );
  }
}

export default Aside;
