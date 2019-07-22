import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <nav className="navbar navbar-light bg-light justify-content-between">
      <Link className="navbar-brand" to="/">Twittter</Link>
      <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={props.onLogout}>Logout</button>
    </nav>
  );
};

export default Header;
