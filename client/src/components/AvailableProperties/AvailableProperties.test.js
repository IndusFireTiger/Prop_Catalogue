import React from 'react';
import ReactDOM from 'react-dom';
import AvailableProperties from './AvailableProperties';

it('AvailableProperties without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AvailableProperties />, div);
  ReactDOM.unmountComponentAtNode(div);
});
