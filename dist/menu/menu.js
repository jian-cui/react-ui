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

var _omit = require('omit.js');

var _omit2 = _interopRequireDefault(_omit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).call(this, props));

    _this.state = {
      activeItem: undefined,
      innerSelectedKey: props.selectedKey
    };
    return _this;
  }

  _createClass(Menu, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      return {
        itemHook: {
          activeItem: function activeItem(eventKey) {
            _this2.setState({
              activeItem: eventKey
            });
          },
          deactiveItem: function deactiveItem() {
            _this2.setState({
              activeItem: -1
            });
          },
          clickItem: function clickItem(key) {
            _this2.setState({
              innerSelectedKey: key
            });
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          className = _props.className,
          mode = _props.mode,
          style = _props.style,
          children = _props.children,
          visible = _props.visible,
          others = _objectWithoutProperties(_props, ['prefixCls', 'className', 'mode', 'style', 'children', 'visible']);

      var modeClass = prefixCls + '-' + mode;
      var visibleClass = visible ? '' : prefixCls + '-hidden';
      var classes = (0, _classnames2.default)(prefixCls, className, modeClass, visibleClass);
      var activeItem = this.state.activeItem;
      var selectedKey = this.state.innerSelectedKey.toString();
      return _react2.default.createElement(
        'ul',
        _extends({ className: classes, style: style }, (0, _omit2.default)(others, ['selectedKey']), { role: 'menu', tabIndex: '0' }),
        _react2.default.Children.map(children, function (child) {
          if (!_react2.default.isValidElement(child)) {
            return null;
          }
          return _react2.default.cloneElement(child, {
            activeKey: activeItem,
            eventKey: child.key,
            selectedKey: selectedKey
          });
        })
      );
    }
  }]);

  return Menu;
}(_react2.default.Component);

Menu.defaultProps = {
  prefixCls: 'react-menu',
  className: undefined,
  mode: 'vertical',
  children: undefined,
  style: undefined,
  visible: true,
  selectedKey: -1
};
Menu.propTypes = {
  prefixCls: _propTypes2.default.string,
  className: _propTypes2.default.string,
  mode: _propTypes2.default.oneOf(['horizontal', 'vertical', 'inline']),
  children: _propTypes2.default.node,
  style: _reactStyleProptype2.default,
  visible: _propTypes2.default.bool,
  selectedKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
Menu.childContextTypes = {
  itemHook: _propTypes2.default.object
};
exports.default = Menu;