import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import omit from 'omit.js';

class Menu extends React.Component {
  static defaultProps = {
    prefixCls: 'react-menu',
    className: undefined,
    mode: 'vertical',
    children: undefined,
    style: undefined,
    visible: true,
    selectedKey: -1,
  }

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    mode: PropTypes.oneOf(['horizontal', 'vertical', 'inline']),
    children: PropTypes.node,
    style: stylePropType,
    visible: PropTypes.bool,
    selectedKey: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }
  static childContextTypes = {
    itemHook: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      activeItem: undefined,
      innerSelectedKey: props.selectedKey,
    };
  }

  getChildContext() {
    return {
      itemHook: {
        activeItem: (eventKey) => {
          this.setState({
            activeItem: eventKey
          });
        },
        deactiveItem: () => {
          this.setState({
            activeItem: -1
          });
        },
        clickItem: (key) => {
          this.setState({
            innerSelectedKey: key
          });
        }
      }
    };
  }
  render() {
    const { prefixCls, className, mode, style, children, visible, ...others } = this.props;
    const modeClass = `${prefixCls}-${mode}`;
    const visibleClass = visible ? '' : `${prefixCls}-hidden`;
    const classes = classNames(prefixCls, className, modeClass, visibleClass);
    const activeItem = this.state.activeItem;
    const selectedKey = this.state.innerSelectedKey.toString();
    return (
      <ul className={classes} style={style} {...omit(others, ['selectedKey'])} role="menu" tabIndex="0">
        {
          React.Children.map(children, (child) => {
            if (!React.isValidElement(child)) {
              return null;
            }
            return React.cloneElement(child, {
              activeKey: activeItem,
              eventKey: child.key,
              selectedKey,
            });
          })
        }
      </ul>
    );
  }
}

export default Menu;
