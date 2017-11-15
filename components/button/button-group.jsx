import React from 'react';
import classNames from 'classnames';
// import PropTypes from 'prop-types';

export default class ButtonGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    const { prefixCls='react-btn-group', className, children } = this.props;
    
    const classes = classNames(prefixCls, {

    }, className);
    return (
      <div className={classes}>
        { children }
      </div>)
  }
}