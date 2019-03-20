import React from 'react';
import ReactDOM from 'react-dom';
import SavedProperties from './SavedProperties';

it('SavedProperties without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SavedProperties />, div);
  ReactDOM.unmountComponentAtNode(div);
});
