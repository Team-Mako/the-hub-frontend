import React from 'react';
import { NavLink } from 'react-router-dom';

const SubMenu = () => (
  <div className="admin-panel__sub-nav">
    <NavLink to="/admin/create-material">Create</NavLink>
  </div>
);

export default SubMenu;
