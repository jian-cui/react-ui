import React from 'react';
import ReactDom from 'react-dom';
import Button from './components/button/button.jsx';
import './test.less';

ReactDom.render(
  <div className="button-wrapper">
    <Button type="primary">Primary</Button>
    <Button>Default</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="danger">Danger</Button>
  </div>,
  document.getElementById('app')
)