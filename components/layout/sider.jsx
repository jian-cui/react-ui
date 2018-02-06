// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
/* global window */
if (typeof window !== 'undefined') {
  const matchMediaPolyfill = (mediaQuery) => {
    return {
      media: mediaQuery,
      matches: false,
      addListener() {
      },
      removeListener() {
      },
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import stylePropType from 'react-style-proptype';
import Icon from '../icon';
/* eslint-enable */

const generatedId = (() => {
  let i = 0;
  return (prefix) => {
    i += 1;
    return `${prefix}${i}`;
  };
});

class Sider extends React.Component {
  static contextTypes = {
    siderHook: PropTypes.object
  }

  static defaultProps = {
    prefixCls: 'react-layout-sider',
    width: 200,
    collapsedWidth: 80,
    collapsible: false,
    collapsed: false,
    style: undefined,
    trigger: undefined,
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    width: PropTypes.number,
    collapsedWidth: PropTypes.number,
    collapsible: PropTypes.bool,
    collapsed: PropTypes.bool,
    style: stylePropType,
    trigger: PropTypes.element,
  }

  constructor(props) {
    super(props);
    // Sider控件ID
    this._uniqueId = generatedId('react-sider-');
    // this._mql = matchMedia()

    this.state = {
      collapsed: props.collapsed
    };

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    if (this.context.siderHook) {
      this.context.siderHook.addSider(this._uniqueId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if ('collapsed' in nextProps) {
      this.setState({
        collapsed: nextProps.collapsed
      });
    }
  }
  componentWillUnmount() {
    if (this.context.siderHook) {
      this.context.siderHook.removeSider(this._uniqueId);
    }
  }

  toggle() {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  }

  render() {
    const { prefixCls, collapsible, width, collapsedWidth, style, trigger } = this.props;

    const classes = classNames(prefixCls);

    const divWidth = this.state.collapsed ? collapsedWidth : width;

    const divStyle = {
      ...style,
      flex: `0 0 ${divWidth}px`,
      maxWidth: `${divWidth}px`,
      minWidth: `${divWidth}px`,
      width: `${divWidth}px`,
    };

    const defaultTriggerObj = {
      expanded: <Icon type="left" />,
      collapsed: <Icon type="right" />
    };
    const status = this.state.collapsed ? 'collapsed' : 'expanded';
    const defaultTrigger = defaultTriggerObj[status];

    // 侧边栏收起按钮
    const triggerDom = (
      <div className={`${prefixCls}-trigger`} onClick={this.toggle} style={{ width: `${divWidth}px` }} role="button" tabIndex={0} >
        { trigger || defaultTrigger }
      </div>
    );

    return (
      <div className={classes} style={divStyle}>
        <div className={`${prefixCls}-children`}>
          { this.props.children }
        </div>
        { collapsible || triggerDom }
      </div>
    );
  }
}

export default Sider;
