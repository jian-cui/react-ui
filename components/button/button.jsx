import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from '../icon';
import './style/style.less';

export default class Button extends React.Component {
  static defaultProps = {
    type: 'default',
    shape: undefined,
    icon: undefined,
    buttonType: 'button',
    prefixCls: 'react-btn',
    loading: false,
    ghost: false,
    size: 'medium',
    disabled: false,
    className: '',
    href: undefined,
    children: undefined,
  };

  static propTypes = {
    type: PropTypes.string,
    shape: PropTypes.string,
    icon: PropTypes.string,
    buttonType: PropTypes.oneOf(['button']),
    prefixCls: PropTypes.string,
    loading: PropTypes.bool,
    ghost: PropTypes.bool,
    disabled: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    className: PropTypes.string,
    onClick: PropTypes.func,
    href: PropTypes.string,
    children: PropTypes.node,
  }
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
    };
    this.timeoutID = null;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    // Add click effect
    this.setState({ clicked: true });
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout(() => {
      this.setState({ clicked: false });
    }, 500);

    const onClick = this.props.onClick;
    if (onClick) {
      onClick(e);
    }
  }
  render() {
    const {
      type, buttonType, shape, size, className, children,
      icon, prefixCls, loading, ghost, disabled, href, style,
    } = this.props;

    let sizeCls = '';
    switch (size) {
      case 'large':
        sizeCls = 'lg';
        break;
      case 'small':
        sizeCls = 'sm';
        break;
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
      [`${prefixCls}-background-ghost`]: ghost,
    });
    const ComponentName = href ? 'a' : 'button';
    const iconType = loading ? 'loading' : icon;
    const iconNode = iconType ? <Icon type={iconType} /> : null;
    const kids = React.Children.map(children, (child) => {
      return <span>{child}</span>;
    });
    const dis = disabled ? 'disabled' : '';
    return (
      <ComponentName
        type={href ? undefined : buttonType}
        className={classes}
        onClick={this.handleClick}
        disabled={dis}
        href={href}
        style={style}
      >
        { iconNode }
        { kids }
      </ComponentName>
    );
  }
}

// Button.defaultProps = {
//   type: 'default',
//   shape: undefined,
//   icon: undefined,
//   buttonType: 'button',
//   prefixCls: 'react-btn',
//   loading: false,
//   ghost: false,
//   size: 'medium',
//   disabled: false,
//   className: '',
//   href: undefined,
//   children: undefined,
// };

// Button.propTypes = {
//   type: PropTypes.string,
//   shape: PropTypes.string,
//   icon: PropTypes.string,
//   buttonType: PropTypes.oneOf(['button']),
//   prefixCls: PropTypes.string,
//   loading: PropTypes.bool,
//   ghost: PropTypes.bool,
//   disabled: PropTypes.bool,
//   size: PropTypes.oneOf(['small', 'medium', 'large']),
//   className: PropTypes.string,
//   onClick: PropTypes.func,
//   href: PropTypes.string,
//   children: PropTypes.node,
// };
