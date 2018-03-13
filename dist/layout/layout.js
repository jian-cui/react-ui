'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactStyleProptype = require('react-style-proptype');

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

require('./style/style.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  var WithPrefixCls = function (_React$Component) {
    _inherits(WithPrefixCls, _React$Component);

    function WithPrefixCls() {
      _classCallCheck(this, WithPrefixCls);

      return _possibleConstructorReturn(this, (WithPrefixCls.__proto__ || Object.getPrototypeOf(WithPrefixCls)).apply(this, arguments));
    }

    _createClass(WithPrefixCls, [{
      key: 'render',
      value: function render() {
        var prefixCls = props.prefixCls;


        return (
          // {...this.props} 此处将所有的prop传入了组件
          _react2.default.createElement(WrappedComponent, _extends({ prefixCls: prefixCls }, this.props))
        );
      }
    }]);

    return WithPrefixCls;
  }(_react2.default.Component);

  WithPrefixCls.displayName = 'WithPrefixCls(' + getDisplayName(WrappedComponent) + ')';
  return WithPrefixCls;
}

/**
 * 基本组件
 * 用于生成Header, Footer, Content
 */

var Basic = function (_React$Component2) {
  _inherits(Basic, _React$Component2);

  function Basic() {
    _classCallCheck(this, Basic);

    return _possibleConstructorReturn(this, (Basic.__proto__ || Object.getPrototypeOf(Basic)).apply(this, arguments));
  }

  _createClass(Basic, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          children = _props.children,
          style = _props.style;

      var divCls = (0, _classnames2.default)(className, prefixCls);
      return _react2.default.createElement(
        'div',
        { className: divCls, style: style },
        children
      );
    }
  }]);

  return Basic;
}(_react2.default.Component);

/**
 * Layout组件
 */


Basic.defaultProps = {
  className: '',
  prefixCls: '',
  style: undefined,
  children: ''
};
Basic.propTypes = {
  prefixCls: _propTypes2.default.string,
  className: _propTypes2.default.string,
  style: _reactStyleProptype2.default,
  children: _propTypes2.default.node
};

var BasicLayout = function (_React$Component3) {
  _inherits(BasicLayout, _React$Component3);

  function BasicLayout(props) {
    _classCallCheck(this, BasicLayout);

    var _this3 = _possibleConstructorReturn(this, (BasicLayout.__proto__ || Object.getPrototypeOf(BasicLayout)).call(this, props));

    _this3.state = {
      siders: []
    };
    return _this3;
  }

  _createClass(BasicLayout, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this4 = this;

      return {
        siderHook: {
          addSider: function addSider(id) {
            _this4.setState({
              siders: [].concat(_toConsumableArray(_this4.state.siders), [id])
            });
          },
          removeSider: function removeSider(id) {
            _this4.setState({
              siders: _this4.state.siders.filter(function (curId) {
                return curId !== id;
              })
            });
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          prefixCls = _props2.prefixCls,
          className = _props2.className,
          children = _props2.children,
          hasSider = _props2.hasSider;

      var cls = (0, _classnames2.default)(className, prefixCls, _defineProperty({}, prefixCls + '-has-sider', hasSider || this.state.siders.length > 0));
      return _react2.default.createElement(
        'div',
        { className: cls },
        children
      );
    }
  }]);

  return BasicLayout;
}(_react2.default.Component);

BasicLayout.defaultProps = {
  prefixCls: undefined,
  className: '',
  children: undefined,
  hasSider: false
};
BasicLayout.propTypes = {
  prefixCls: _propTypes2.default.string,
  className: _propTypes2.default.string,
  children: _propTypes2.default.node,
  hasSider: _propTypes2.default.bool
};
BasicLayout.childContextTypes = {
  siderHook: _propTypes2.default.object
};


var Header = withPrefixCls({
  prefixCls: 'react-layout-header'
}, Basic);

var Footer = withPrefixCls({
  prefixCls: 'react-layout-footer'
}, Basic);

var Content = withPrefixCls({
  prefixCls: 'react-layout-content'
}, Basic);

var Layout = withPrefixCls({
  prefixCls: 'react-layout'
}, BasicLayout);

Layout.Header = Header;
Layout.Footer = Footer;
Layout.Content = Content;

exports.default = Layout;