'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

require('./style/style.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));

    _this.state = {
      clicked: false
    };
    _this.timeoutID = null;

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  _createClass(Button, [{
    key: 'handleClick',
    value: function handleClick(e) {
      var _this2 = this;

      // Add click effect
      this.setState({ clicked: true });
      clearTimeout(this.timeoutID);
      this.timeoutID = setTimeout(function () {
        _this2.setState({ clicked: false });
      }, 500);

      var onClick = this.props.onClick;
      if (onClick) {
        onClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          type = _props.type,
          buttonType = _props.buttonType,
          shape = _props.shape,
          size = _props.size,
          className = _props.className,
          children = _props.children,
          icon = _props.icon,
          prefixCls = _props.prefixCls,
          loading = _props.loading,
          ghost = _props.ghost,
          disabled = _props.disabled,
          href = _props.href,
          style = _props.style;


      var sizeCls = '';
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

      var clicked = this.state.clicked;


      var classes = (0, _classnames2.default)(prefixCls, className, (_classNames = {}, _defineProperty(_classNames, prefixCls + '-' + type, type), _defineProperty(_classNames, prefixCls + '-' + shape, shape), _defineProperty(_classNames, prefixCls + '-' + sizeCls, sizeCls), _defineProperty(_classNames, prefixCls + '-loading', loading), _defineProperty(_classNames, prefixCls + '-clicked', clicked), _defineProperty(_classNames, prefixCls + '-background-ghost', ghost), _classNames));
      var ComponentName = href ? 'a' : 'button';
      var iconType = loading ? 'loading' : icon;
      var iconNode = iconType ? _react2.default.createElement(_icon2.default, { type: iconType }) : null;
      var kids = _react2.default.Children.map(children, function (child) {
        return _react2.default.createElement(
          'span',
          null,
          child
        );
      });
      var dis = disabled ? 'disabled' : '';
      return _react2.default.createElement(
        ComponentName,
        {
          type: href ? undefined : buttonType,
          className: classes,
          onClick: this.handleClick,
          disabled: dis,
          href: href,
          style: style
        },
        iconNode,
        kids
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

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


Button.defaultProps = {
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
  children: undefined
};
Button.propTypes = {
  type: _propTypes2.default.string,
  shape: _propTypes2.default.string,
  icon: _propTypes2.default.string,
  buttonType: _propTypes2.default.oneOf(['button']),
  prefixCls: _propTypes2.default.string,
  loading: _propTypes2.default.bool,
  ghost: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool,
  size: _propTypes2.default.oneOf(['small', 'medium', 'large']),
  className: _propTypes2.default.string,
  onClick: _propTypes2.default.func,
  href: _propTypes2.default.string,
  children: _propTypes2.default.node
};
exports.default = Button;