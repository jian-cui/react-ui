import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import addEventlistener from 'rc-util/lib/Dom/addEventlistener';

function getOffset(element) {
  // const elementRect = element.getBoundingClientRect();
  // console.log(elementRect);
}

export default class Affix extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      affixStype: null
    }
  }
  updatePosition(e) {
    // 处理位置
    const { offsetBottom, offsetTop, target, onChange } = this.props;
    getOffset(e);
  }
  render () {
    const { offsetBottom, offsetTop, target, onChange, children } = this.props;
    const classes = classNames('react-affix');
    this.updatePosition();
    return (
      <div 
        className={ classes }
        style={ this.state.affixStyle }>
        { children }
      </div>
    )
  }
}

Affix.propTypes = {
  offBottom: PropTypes.number,
  offsetTop: PropTypes.number,
  target: PropTypes.func,
  onChange: PropTypes.func
}

Affix.defaultProps = {
  offsetBottom: 0,
  offsetTop: 0,
  target: () => window
}