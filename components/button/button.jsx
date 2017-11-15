import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon/index.jsx';
import './style/style.less';

export default class Button extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      clicked: false,
    }
  }

  timeoutID;

  componentWillReceiveProps() {

  }
  handleClick (e) {
    // Add click effect
    this.setState({ clicked: true });
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(() => this.setState({ clicked: false }), 500);

    const onClick = this.props.onClick;
    if (onClick) {
      onClick(e);
    }
  }
  render () {
    const {
      type, shape, size, className, children, icon, prefixCls, loading, ghost, disabled
     } = this.props;

    let sizeCls = '';
    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
      default:
        break;
    }


    const { clicked } = this.state;

    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-${sizeCls}`]: sizeCls,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-clicked`]: clicked,
      [`${prefixCls}-background-ghost`]: ghost
    })

    const iconType = loading ? 'loading' : icon;
    const iconNode = iconType ? <Icon type={iconType} /> : null;
    const kids = React.Children.map(children, child => <span>{child}</span>);
    const dis = disabled ? 'disabled' : '';
    return (
      <button
        type='button'
        className={ classes }
        onClick={ this.handleClick.bind(this) }
        disabled= { disabled }
      >
        { iconNode }
        { kids }
      </button>
    )
  }
}

Button.defaultProps = {
  type: 'default',
  prefixCls: 'react-btn',
  loading: false,
  ghost: false,
  size: 'medium',
  disabled: false
}

Button.propTypes = {
  type: PropTypes.string,
  shape: PropTypes.string,
  icon: PropTypes.string,
  prefixCls: PropTypes.string,
  loading: PropTypes.bool,
  ghost: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  onClick: PropTypes.func
}