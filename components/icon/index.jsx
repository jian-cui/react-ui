import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export default class Icon extends React.Component {
  constructor (props) {
    super(props);
  }
  render () {
    const { type, className = '', spin } = this.props;
    let typeClass = type;
    if (type == 'loading') typeClass = 'loading2';
    const classes = classNames({
      reacticon: true,
      [`icon-${typeClass}`]: true,
    }, className);
    return <i className={ classes } />
  }
}