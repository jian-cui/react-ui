import React from 'react';
import ReactDom from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class SubPopupMenu extends React.Component {
  static defaultProps = {
    prefixCls: 'react-menu-sub-popup',
    visible: false,
    left: 0,
    top: 0,
    width: 0
  }
  static propTypes = {
    prefixCls: PropTypes.string,
    visible: PropTypes.bool,
    left: PropTypes.number,
    top: PropTypes.number,
    width: PropTypes.number
  }

  static contextTypes = {
    popupMenuHandler: PropTypes.object
  }
  constructor(props) {
    super(props);

    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
  }
  onMouseEnter() {
    if (this.context.popupMenuHandler) {
      this.context.popupMenuHandler.showPopup();
    }
  }

  onMouseLeave() {
    if (this.context.popupMenuHandler) {
      this.context.popupMenuHandler.hidePopup();
    }
  }

  render() {
    const {
      prefixCls, visible, left, top, width, activeKey, selectedKey, children
    } = this.props;
    const classes = classNames(prefixCls);
    const style = {
      left: `${left}px`,
      top: `${top}px`,
      minWidth: `${width}px`
    };
    const childClasses = classNames({
      'react-menu': true,
      'react-menu-sub': true,
      'react-menu-vertical': true,
      'react-menu-hidden': !visible
    });

    return (
      <div>
        <div
          className={classes}
          style={style}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
        >
          <ul className={childClasses} >
            {
              React.Children.map(children, (child) => {
                return React.cloneElement(child, {
                  activeKey,
                  eventKey: child.key,
                  selectedKey,
                  onClick: (e) => {
                    if (this.context.popupMenuHandler) {
                      this.context.popupMenuHandler.hidePopup();
                    }
                    if (typeof child.props.onClick === 'function') {
                      child.props.onClick(e);
                    }
                  }
                });
              })
            }
          </ul>
        </div>
      </div>

    );
  }
}

export default class SubMenu extends React.Component {
  static defaultProps = {
    prefixCls: 'react-menu-submenu',
    titlePrefixCls: 'react-menu-submenu-title'
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    titlePrefixCls: PropTypes.string
  }

  static childContextTypes = {
    popupMenuHandler: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      subPopupVisible: false,
      left: 0,
      top: 0,
      width: 0
    };

    this.elm = undefined;
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.setDomPos = this.setDomPos.bind(this);

    this.showPopupMenu = this.showPopupMenu.bind(this);
    this.hidePopupMenu = this.hidePopupMenu.bind(this);

    this.timeOutId = undefined;
    this.subMenuOpenDelay = 0.2;
    this.subMenuCloseDelay = 0.2;
  }
  getChildContext() {
    return {
      popupMenuHandler: {
        showPopup: () => {
          console.log('submenu enter');
          clearTimeout(this.timeoutId);
        },
        hidePopup: () => {
          console.log('submenu leave');
          this.hidePopupMenu();
        }
      }
    };
  }

  onMouseEnter() {
    console.log('menu enter');
    this.showPopupMenu();
  }

  onMouseLeave() {
    console.log('menu leave');
    this.hidePopupMenu();
  }

  setDomPos() {
    if (this.elm) {
      const rect = this.elm.getBoundingClientRect();
      this.setState({
        left: rect.left + document.documentElement.scrollLeft,
        top: rect.top + rect.height + document.documentElement.scrollTop + 2,
        width: rect.width
      });
    }
  }

  setPopupMenuVisible(bool) {
    this.setState({
      subPopupVisible: bool
    });
  }
  showPopupMenu() {
    clearTimeout(this.timeoutId);
    const delay = this.subMenuOpenDelay * 1000;
    this.timeoutId = setTimeout(() => {
      this.setDomPos();
      this.setPopupMenuVisible(true);
    }, delay);
  }

  hidePopupMenu() {
    const delay = this.subMenuCloseDelay * 1000;
    clearTimeout(this.timeoutId);
    this.timeoutId = setTimeout(() => {
      this.setPopupMenuVisible(false);
    }, delay);
  }

  popupMenuRender() {
    /* global document */
    const { activeKey, eventKey, selectedKey } = this.props;
    return ReactDom.createPortal((
      <div style={{ position: 'absolute', top: '0px', left: '0px' }}>
        <SubPopupMenu
          visible={this.state.subPopupVisible}
          left={this.state.left}
          top={this.state.top}
          width={this.state.width}
          activeKey={activeKey}
          eventKey={eventKey}
          selectedKey={selectedKey}
        >
          { this.props.children }
        </SubPopupMenu>
      </div>), document.body);
  }

  render() {
    const { prefixCls, titlePrefixCls, title } = this.props;
    const menuClasses = classNames(prefixCls);
    const titleClasses = classNames(titlePrefixCls);
    return (
      <React.Fragment>
        <li className={menuClasses} role="menuitem" onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} ref={(elm) => { this.elm = elm; }}>
          <div className={titleClasses}>
            { title }
          </div>
        </li>
        { this.popupMenuRender() }
      </React .Fragment>
    );
  }
}
