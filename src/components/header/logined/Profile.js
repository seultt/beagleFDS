import React, { Component } from 'react';

export default class Profile extends Component {
  render () {
    return (
      <li>
        <a className="menu__profile menu_icon">
          <img alt="프로필" />
        </a>
      </li>
    )
  }
}

// src={this.state.currentUser.photo}
