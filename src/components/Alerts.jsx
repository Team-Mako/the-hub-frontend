import React from 'react';

function Alerts(props) {
  const { active, message } = props;

  return (
    <div className={active ? 'alerts--active' : 'alerts'}>
      <p>{message}</p>
    </div>
  );
}

export default Alerts;
