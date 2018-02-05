import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './style/style.less';

export default class Icon extends React.Component {
  render() {
    const { type, className } = this.props;
    let typeClass = type;
    if (type === 'loading') typeClass = 'loading2';
    const classes = classNames({
      reacticon: true,
      [`icon-${typeClass}`]: true,
    }, className);
    return <i className={classes} />;
  }
}

Icon.defaultProps = {
  type: undefined,
  className: '',
};

Icon.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
};
