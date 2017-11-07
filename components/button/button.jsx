import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style/style.less';

export default class Button extends React.Component {
  constructor (props) {
    // props.type primary, dashed, danger
    // props.shape default, circle
    // props.icon 
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
    
    const { clicked } = this.state;
    const classes = classNames(prefixCls, className, {
      [`${prefixCls}-${type}`]: type,
      [`${prefixCls}-${shape}`]: shape,
      [`${prefixCls}-loading`]: loading,
      [`${prefixCls}-clicked`]: clicked,
      [`${prefixCls}-background-ghost`]: ghost
    })
    console.log(prefixCls, className, )
    console.log(classes)
    return (
      <button
        type='button'
        className={classes}
        onClick={this.handleClick.bind(this)}
      >
        <span>{ children }</span>
      </button>
    )
  }
}

Button.defaultProps = {
  type: 'default',
  prefixCls: 'react-btn',
  loading: false,
  ghost: false,
  size: 'medium'
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
  className: PropTypes.string
}