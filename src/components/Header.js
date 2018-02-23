import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => (
  <div className="header">
    <div className="container">
      <h1 className="header__title">{props.title}</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      <NavLink to="/quiz" activeClassName="is-active" exact={true}>Take Test</NavLink>
    </div>
  </div>
);

Header.defaultProps = {
  title: 'Vocabulary Test'
};

export default Header;
