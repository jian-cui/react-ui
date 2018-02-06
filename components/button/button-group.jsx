import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class ButtonGroup extends React.Component {
  static defaultProps = {
    prefixCls: 'react-btn-group',
    className: undefined,
    children: undefined
  };
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node
  };
  render() {
    const { prefixCls, className, children } = this.props;
    const classes = classNames(prefixCls, {

    }, className);
    return <div className={classes}>{ children }</div>;
  }
}
