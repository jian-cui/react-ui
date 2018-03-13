'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SubPopupMenu = function (_React$Component) {
  _inherits(SubPopupMenu, _React$Component);

  function SubPopupMenu(props) {
    _classCallCheck(this, SubPopupMenu);

    var _this = _possibleConstructorReturn(this, (SubPopupMenu.__proto__ || Object.getPrototypeOf(SubPopupMenu)).call(this, props));

    _this.onMouseEnter = _this.onMouseEnter.bind(_this);
    _this.onMouseLeave = _this.onMouseLeave.bind(_this);
    return _this;
  }

  _createClass(SubPopupMenu, [{
    key: 'onMouseEnter',
    value: function onMouseEnter() {
      if (this.context.popupMenuHandler) {
        this.context.popupMenuHandler.showPopup();
      }
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      if (this.context.popupMenuHandler) {
        this.context.popupMenuHandler.hidePopup();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          prefixCls = _props.prefixCls,
          visible = _props.visible,
          left = _props.left,
          top = _props.top,
          width = _props.width,
          activeKey = _props.activeKey,
          selectedKey = _props.selectedKey,
          children = _props.children;

      var classes = (0, _classnames2.default)(prefixCls);
      var style = {
        left: left + 'px',
        top: top + 'px',
        minWidth: width + 'px'
      };
      var childClasses = (0, _classnames2.default)({
        'react-menu': true,
        'react-menu-sub': true,
        'react-menu-vertical': true,
        'react-menu-hidden': !visible
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          {
            className: classes,
            style: style,
            onMouseEnter: this.onMouseEnter,
            onMouseLeave: this.onMouseLeave
          },
          _react2.default.createElement(
            'ul',
            { className: childClasses },
            _react2.default.Children.map(children, function (child) {
              return _react2.default.cloneElement(child, {
                activeKey: activeKey,
                eventKey: child.key,
                selectedKey: selectedKey,
                onClick: function onClick(e) {
                  if (_this2.context.popupMenuHandler) {
                    _this2.context.popupMenuHandler.hidePopup();
                  }
                  if (typeof child.props.onClick === 'function') {
                    child.props.onClick(e);
                  }
                }
              });
            })
          )
        )
      );
    }
  }]);

  return SubPopupMenu;
}(_react2.default.Component);

SubPopupMenu.defaultProps = {
  prefixCls: 'react-menu-sub-popup',
  visible: false,
  left: 0,
  top: 0,
  width: 0
};
SubPopupMenu.propTypes = {
  prefixCls: _propTypes2.default.string,
  visible: _propTypes2.default.bool,
  left: _propTypes2.default.number,
  top: _propTypes2.default.number,
  width: _propTypes2.default.number
};
SubPopupMenu.contextTypes = {
  popupMenuHandler: _propTypes2.default.object
};

var SubMenu = function (_React$Component2) {
  _inherits(SubMenu, _React$Component2);

  function SubMenu(props) {
    _classCallCheck(this, SubMenu);

    var _this3 = _possibleConstructorReturn(this, (SubMenu.__proto__ || Object.getPrototypeOf(SubMenu)).call(this, props));

    _this3.state = {
      subPopupVisible: false,
      left: 0,
      top: 0,
      width: 0
    };

    _this3.elm = undefined;
    _this3.onMouseEnter = _this3.onMouseEnter.bind(_this3);
    _this3.onMouseLeave = _this3.onMouseLeave.bind(_this3);
    _this3.setDomPos = _this3.setDomPos.bind(_this3);

    _this3.showPopupMenu = _this3.showPopupMenu.bind(_this3);
    _this3.hidePopupMenu = _this3.hidePopupMenu.bind(_this3);

    _this3.timeOutId = undefined;
    _this3.subMenuOpenDelay = 0.2;
    _this3.subMenuCloseDelay = 0.2;
    return _this3;
  }

  _createClass(SubMenu, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this4 = this;

      return {
        popupMenuHandler: {
          showPopup: function showPopup() {
            console.log('submenu enter');
            clearTimeout(_this4.timeoutId);
          },
          hidePopup: function hidePopup() {
            console.log('submenu leave');
            _this4.hidePopupMenu();
          }
        }
      };
    }
  }, {
    key: 'onMouseEnter',
    value: function onMouseEnter() {
      console.log('menu enter');
      this.showPopupMenu();
    }
  }, {
    key: 'onMouseLeave',
    value: function onMouseLeave() {
      console.log('menu leave');
      this.hidePopupMenu();
    }
  }, {
    key: 'setDomPos',
    value: function setDomPos() {
      if (this.elm) {
        var rect = this.elm.getBoundingClientRect();
        this.setState({
          left: rect.left + document.documentElement.scrollLeft,
          top: rect.top + rect.height + document.documentElement.scrollTop + 2,
          width: rect.width
        });
      }
    }
  }, {
    key: 'setPopupMenuVisible',
    value: function setPopupMenuVisible(bool) {
      this.setState({
        subPopupVisible: bool
      });
    }
  }, {
    key: 'showPopupMenu',
    value: function showPopupMenu() {
      var _this5 = this;

      clearTimeout(this.timeoutId);
      var delay = this.subMenuOpenDelay * 1000;
      this.timeoutId = setTimeout(function () {
        _this5.setDomPos();
        _this5.setPopupMenuVisible(true);
      }, delay);
    }
  }, {
    key: 'hidePopupMenu',
    value: function hidePopupMenu() {
      var _this6 = this;

      var delay = this.subMenuCloseDelay * 1000;
      clearTimeout(this.timeoutId);
      this.timeoutId = setTimeout(function () {
        _this6.setPopupMenuVisible(false);
      }, delay);
    }
  }, {
    key: 'popupMenuRender',
    value: function popupMenuRender() {
      /* global document */
      var _props2 = this.props,
          activeKey = _props2.activeKey,
          eventKey = _props2.eventKey,
          selectedKey = _props2.selectedKey;

      return _reactDom2.default.createPortal(_react2.default.createElement(
        'div',
        { style: { position: 'absolute', top: '0px', left: '0px' } },
        _react2.default.createElement(
          SubPopupMenu,
          {
            visible: this.state.subPopupVisible,
            left: this.state.left,
            top: this.state.top,
            width: this.state.width,
            activeKey: activeKey,
            eventKey: eventKey,
            selectedKey: selectedKey
          },
          this.props.children
        )
      ), document.body);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var _props3 = this.props,
          prefixCls = _props3.prefixCls,
          titlePrefixCls = _props3.titlePrefixCls,
          title = _props3.title;

      var menuClasses = (0, _classnames2.default)(prefixCls);
      var titleClasses = (0, _classnames2.default)(titlePrefixCls);
      return _react2.default.createElement(
        _react2.default.Fragment,
        null,
        _react2.default.createElement(
          'li',
          { className: menuClasses, role: 'menuitem', onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave, ref: function ref(elm) {
              _this7.elm = elm;
            } },
          _react2.default.createElement(
            'div',
            { className: titleClasses },
            title
          )
        ),
        this.popupMenuRender()
      );
    }
  }]);

  return SubMenu;
}(_react2.default.Component);

SubMenu.defaultProps = {
  prefixCls: 'react-menu-submenu',
  titlePrefixCls: 'react-menu-submenu-title'
};
SubMenu.propTypes = {
  prefixCls: _propTypes2.default.string,
  titlePrefixCls: _propTypes2.default.string
};
SubMenu.childContextTypes = {
  popupMenuHandler: _propTypes2.default.object
};
exports.default = SubMenu;