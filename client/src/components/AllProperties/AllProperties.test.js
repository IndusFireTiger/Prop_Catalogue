import React from 'react';
import ReactDOM from 'react-dom';
import AllProperties from './AllProperties';

it('AllProperties without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AllProperties />, div);
  ReactDOM.unmountComponentAtNode(div);
});
