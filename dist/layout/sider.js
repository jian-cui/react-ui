'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactStyleProptype = require('react-style-proptype');

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
/* global window */
if (typeof window !== 'undefined') {
  var matchMediaPolyfill = function matchMediaPolyfill(mediaQuery) {
    return {
      media: mediaQuery,
      matches: false,
      addListener: function addListener() {},
      removeListener: function removeListener() {}
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
}

/* eslint-disable */

/* eslint-enable */

var generatedId = function generatedId() {
  var i = 0;
  return function (prefix) {
    i += 1;
    return '' + prefix + i;
  };
};

var Sider = function (_React$Component) {
  _inherits(Sider, _React$Component);

  function Sider(props) {
    _classCallCheck(this, Sider);

    // Sider控件ID
    var _this = _possibleConstructorReturn(this, (Sider.__proto__ || Object.getPrototypeOf(Sider)).call(this, props));

    _this._uniqueId = generatedId('react-sider-');
    // this._mql = matchMedia()

    _this.state = {
      collapsed: props.collapsed
    };

    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  _createClass(Sider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.context.siderHook) {
        this.context.siderHook.addSider(this._uniqueId);
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if ('collapsed' in nextProps) {
        this.setState({
          collapsed: nextProps.collapsed
        });
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.context.siderHook) {
        this.context.siderHook.removeSider(this._uniqueId);
      }
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      this.setState(function (prevState) {
        return {
          collapsed: !prevState.collapsed
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          collapsible = _props.collapsible,
          width = _props.width,
          collapsedWidth = _props.collapsedWidth,
          style = _props.style,
          trigger = _props.trigger;


      var classes = (0, _classnames2.default)(prefixCls);

      var divWidth = this.state.collapsed ? collapsedWidth : width;

      var divStyle = _extends({}, style, {
        flex: '0 0 ' + divWidth + 'px',
        maxWidth: divWidth + 'px',
        minWidth: divWidth + 'px',
        width: divWidth + 'px'
      });

      var defaultTriggerObj = {
        expanded: _react2.default.createElement(_icon2.default, { type: 'left' }),
        collapsed: _react2.default.createElement(_icon2.default, { type: 'right' })
      };
      var status = this.state.collapsed ? 'collapsed' : 'expanded';
      var defaultTrigger = defaultTriggerObj[status];

      // 侧边栏收起按钮
      var triggerDom = _react2.default.createElement(
        'div',
        { className: prefixCls + '-trigger', onClick: this.toggle, style: { width: divWidth + 'px' }, role: 'button', tabIndex: 0 },
        trigger || defaultTrigger
      );

      return _react2.default.createElement(
        'div',
        { className: classes, style: divStyle },
        _react2.default.createElement(
          'div',
          { className: prefixCls + '-children' },
          this.props.children
        ),
        collapsible || triggerDom
      );
    }
  }]);

  return Sider;
}(_react2.default.Component);

Sider.contextTypes = {
  siderHook: _propTypes2.default.object
};
Sider.defaultProps = {
  prefixCls: 'react-layout-sider',
  width: 200,
  collapsedWidth: 80,
  collapsible: false,
  collapsed: false,
  style: undefined,
  trigger: undefined
};
Sider.propTypes = {
  prefixCls: _propTypes2.default.string,
  width: _propTypes2.default.number,
  collapsedWidth: _propTypes2.default.number,
  collapsible: _propTypes2.default.bool,
  collapsed: _propTypes2.default.bool,
  style: _reactStyleProptype2.default,
  trigger: _propTypes2.default.element
};
exports.default = Sider;