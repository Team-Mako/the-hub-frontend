import React from 'react';
import PropTypes from 'prop-types';

function Alerts(props) {
  const { active, message } = props;

  return (
    <div className={active ? 'alerts--active' : 'alerts'}>
      <p>{message}</p>
    </div>
  );
}

Alerts.propTypes = {
  active: PropTypes.bool,
  message: PropTypes.string,
};

Alerts.defaultProps = {
  active: false,
  message: '',
};

export default Alerts;
