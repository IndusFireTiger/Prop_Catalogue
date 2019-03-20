import React from 'react';
import ReactDOM from 'react-dom';
import SwitchMain from './SwitchMain';
import { BrowserRouter } from "react-router-dom";

it('SwitchMain without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <SwitchMain />
    </BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
