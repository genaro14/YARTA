import React from 'react';
import ReactDOM from 'react-dom';
import Close from './Close';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Close />, div);
  ReactDOM.unmountComponentAtNode(div);
});