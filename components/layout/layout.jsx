import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import './style/style.less';

/**
 * 获取组件显示名称
 * @param {*React.Component} Component React组件
 */
function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

/**
 * 高级组件，输入prefixCls
 * @param {*object} props 包含prefixCls的对象
 * @param {*React.Component} WrappedComponent 组件
 */
function withPrefixCls(props, WrappedComponent) {
  class WithPrefixCls extends React.Component {
    render() {
      const { prefixCls } = props;

      return (
        // {...this.props} 此处将所有的prop传入了组件
        <WrappedComponent prefixCls={prefixCls} {...this.props} />
      );
    }
  }
  WithPrefixCls.displayName = `WithPrefixCls(${getDisplayName(WrappedComponent)})`;
  return WithPrefixCls;
}

/**
 * 基本组件
 * 用于生成Header, Footer, Content
 */
class Basic extends React.Component {
  static defaultProps = {
    className: '',
    prefixCls: '',
    style: undefined,
    children: ''
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: stylePropType,
    children: PropTypes.node,
  };

  render() {
    const { prefixCls, className, children, style } = this.props;
    const divCls = classNames(className, prefixCls);
    return (
      <div className={divCls} style={style}>{children}</div>
    );
  }
}

/**
 * Layout组件
 */
class BasicLayout extends React.Component {
  static defaultProps = {
    prefixCls: undefined,
    className: '',
    children: undefined,
    hasSider: false,
  };
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
    hasSider: PropTypes.bool,
  };
  static childContextTypes = {
    siderHook: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      siders: []
    };
  }
  getChildContext() {
    return {
      siderHook: {
        addSider: (id) => {
          this.setState({
            siders: [...this.state.siders, id]
          });
        },
        removeSider: (id) => {
          this.setState({
            siders: this.state.siders.filter((curId) => {
              return curId !== id;
            })
          });
        }
      }
    };
  }

  render() {
    const {
      prefixCls, className, children, hasSider,
    } = this.props;
    const cls = classNames(className, prefixCls, {
      [`${prefixCls}-has-sider`]: hasSider || this.state.siders.length > 0,
    });
    return (
      <div className={cls}>{children}</div>
    );
  }
}


const Header = withPrefixCls({
  prefixCls: 'react-layout-header'
}, Basic);

const Footer = withPrefixCls({
  prefixCls: 'react-layout-footer'
}, Basic);

const Content = withPrefixCls({
  prefixCls: 'react-layout-content'
}, Basic);

const Layout = withPrefixCls({
  prefixCls: 'react-layout'
}, BasicLayout);

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

export default Layout;
