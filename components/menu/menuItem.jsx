import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';

class MenuItem extends React.Component {
  static defaultProps = {
    prefixCls: 'react-menu-item',
    children: undefined,
    style: undefined,
    eventKey: undefined,
    selectedKey: undefined,
    // selected: false,
    activeKey: undefined
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    children: PropTypes.element,
    style: stylePropType,
    eventKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    selectedKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    // selected: PropTypes.bool,
    activeKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  }
  static contextTypes = {
    itemHook: PropTypes.object
  }
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    if (this.props.selected) {
      if (this.context.itemHook) {
        this.context.itemHook.clickItem(this.props.eventKey);
      }
    }
  }
  onMouseEnter(e) {
    if (this.context.itemHook) {
      this.context.itemHook.activeItem(this.props.eventKey);
    }
    const propOnMouseEnter = this.props.onMouseEnter;
    if (typeof propOnMouseEnter === 'function') {
      propOnMouseEnter(e);
    }
  }
  onMouseLeave(e) {
    if (this.context.itemHook) {
      this.context.itemHook.deactiveItem();
    }
    const propOnMouseLeave = this.props.onMouseLeave;
    if (typeof propOnMouseLeave === 'function') {
      propOnMouseLeave(e);
    }
  }
  onClick(e) {
    if (this.context.itemHook) {
      this.context.itemHook.clickItem(this.props.eventKey);
    }
    const propOnClick = this.props.onClick;
    if (typeof propOnClick === 'function') {
      propOnClick(e);
    }
  }
  render() {
    const { prefixCls, style, children, activeKey, selectedKey, eventKey } = this.props;
    const activeCls = activeKey === eventKey ? `${prefixCls}-active` : '';
    const selectCls = selectedKey === eventKey ? `${prefixCls}-selected` : '';
    const classes = classNames(prefixCls, activeCls, selectCls);
    return (
      <li
        className={classes}
        style={style}
        role="menuitem"
        tabIndex="0"
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onClick}
      >{ children }
      </li>
    );
  }
}

export default MenuItem;
