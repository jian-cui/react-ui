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

var _reactStyleProptype = require('react-style-proptype');

var _reactStyleProptype2 = _interopRequireDefault(_reactStyleProptype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuItem = function (_React$Component) {
  _inherits(MenuItem, _React$Component);

  function MenuItem(props) {
    _classCallCheck(this, MenuItem);

    var _this = _possibleConstructorReturn(this, (MenuItem.__proto__ || Object.getPrototypeOf(MenuItem)).call(this, props));

    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(MenuItem, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.selected) {
        if (this.context.itemHook) {
          this.context.itemHook.clickItem(this.props.eventKey);
        }
      }
    }
  }, {
    key: 'onMouseEnter',
    value: function onMouseEnter(e) {
      if (this.context.itemHook) {
        this.context.itemHook.activeItem(this.props.eventKey);
      }
      var propOnMouseEnter = this.props.onMouseEnter;
      if (typeof propOnMouseEnter === 'function') {
        propOnMouseEnter(e);
      }
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave(e) {
      if (this.context.itemHook) {
        this.context.itemHook.deactiveItem();
      }
      var propOnMouseLeave = this.props.onMouseLeave;
      if (typeof propOnMouseLeave === 'function') {
        propOnMouseLeave(e);
      }
    }
  }, {
    key: 'onClick',
    value: function onClick(e) {
      if (this.context.itemHook) {
        this.context.itemHook.clickItem(this.props.eventKey);
      }
      var propOnClick = this.props.onClick;
      if (typeof propOnClick === 'function') {
        propOnClick(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          prefixCls = _props.prefixCls,
          style = _props.style,
          children = _props.children,
          activeKey = _props.activeKey,
          selectedKey = _props.selectedKey,
          eventKey = _props.eventKey;

      var activeCls = activeKey === eventKey ? prefixCls + '-active' : '';
      var selectCls = selectedKey === eventKey ? prefixCls + '-selected' : '';
      var classes = (0, _classnames2.default)(prefixCls, activeCls, selectCls);
      return _react2.default.createElement(
        'li',
        {
          className: classes,
          style: style,
          role: 'menuitem',
          tabIndex: '0',
          onMouseEnter: this.onMouseEnter,
          onMouseLeave: this.onMouseLeave,
          onClick: this.onClick
        },
        children
      );
    }
  }]);

  return MenuItem;
}(_react2.default.Component);

MenuItem.defaultProps = {
  prefixCls: 'react-menu-item',
  children: undefined,
  style: undefined,
  eventKey: undefined,
  selectedKey: undefined,
  // selected: false,
  activeKey: undefined
};
MenuItem.propTypes = {
  prefixCls: _propTypes2.default.string,
  children: _propTypes2.default.element,
  style: _reactStyleProptype2.default,
  eventKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  selectedKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  // selected: PropTypes.bool,
  activeKey: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
};
MenuItem.contextTypes = {
  itemHook: _propTypes2.default.object
};
exports.default = MenuItem;