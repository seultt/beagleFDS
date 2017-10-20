import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Profile extends Component {
  render () {
    return (
      <Link to={`/profile`}>
        <li>
          <a className="menu__profile menu_icon">
            <img alt="프로필" />
          </a>
        </li>
      </Link>
    )
  }
}

// src={this.state.currentUser.photo}
