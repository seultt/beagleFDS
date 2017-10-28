import React, { Component } from 'react';

export default class LogOut extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <li>
        <a
          className="menu__logout btn"
          onClick={this.props.logout}
        >
        Logout
        </a>
      </li>
    )
  }
}

