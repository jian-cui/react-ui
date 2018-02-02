import React from 'react';
import ReactDom from 'react-dom';
// import Button from './components/button/index.jsx';
// import Affix from './components/affix/index.jsx';
import { Button, Affix } from './components/';
// import { Button, Affix } from './dist/index.js';
import './test.less';
import './font/iconfont.less';

const ButtonGroup = Button.Group;

ReactDom.render(
  <div className="button-wrapper">
    <Affix>
      <Button type="primary">This is a button</Button>
    </Affix>
    <div className="default">
      <Button type="primary">Primary</Button>
      <Button>Default</Button>
      <Button type="dashed">Dashed</Button>
      <Button type="danger">Danger</Button>
    </div>
    <div className="large">
      <Button type="primary" size="large">Primary</Button>
      <Button size="large">Default</Button>
      <Button type="dashed" size="large">Dashed</Button>
      <Button type="danger" size="large">Danger</Button>
    </div>
    <div className="large">
      <Button type="primary" size="small">Primary</Button>
      <Button size="small">Default</Button>
      <Button type="dashed" size="small">Dashed</Button>
      <Button type="danger" size="small">Danger</Button>
    </div>
    <div className="icon">
      <Button icon="search1" shape="circle" />
      <Button icon="search1" shape="circle" type="primary" />
      <Button icon="search1" shape="circle" type="dashed" />
      <Button icon="search1" shape="circle" type="danger" />
      <Button icon="search1">Search</Button>
      <Button icon="search1">测试</Button>
      <Button type="primary" icon="download" size="small">Download</Button>
    </div>
    <div className="disabled">
      <Button type="primary" disabled>Primary</Button>
      <Button disabled>Default</Button>
      <Button type="dashed" disabled>Dashed</Button>
      <Button type="danger" disabled>Danger</Button>
    </div>
    <div className="loading">
      <Button loading type="primary">Primary</Button>
    </div>
    <div className="ghost">
      <Button ghost>Default</Button>
      <Button type="primary" ghost>Primary</Button>
      <Button type="dashed" ghost>Dashed</Button>
      <Button type="danger" ghost>Danger</Button>
    </div>
    <h2>Button Group</h2>
    <ButtonGroup>
      <Button type="primary">Primary</Button>
      <Button type="primary">Primary</Button>
      <Button type="primary">Primary</Button>
      <Button type="primary">Primary</Button>
    </ButtonGroup>

    <Button href="#" style= { {backgroundColor: 'blue',  color: '#FFF', borderColor: 'blue'} } type="primary">a标签按钮</Button>
    <Button href="#" size="large"  type="primary">a标签按钮</Button>
    <Button href="#" size="small">a标签按钮</Button>
  </div>,
  document.getElementById('app')
)