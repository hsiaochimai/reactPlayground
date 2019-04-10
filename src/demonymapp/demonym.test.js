import React from 'react';
import ReactDOM from 'react-dom';
import DemonymApp from './demonymApp';


it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemonymApp />, div);
    ReactDOM.unmountComponentAtNode(div);
  });