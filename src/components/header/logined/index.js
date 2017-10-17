import React, { Component } from 'react';

import Profile from './Profile';
import Alarm  from './Alarm';
import CreateChat from './CreateChat';
import LogOut from './LogOut';
import TestButton from './TestButton';

export default class Logined extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <ul className="menu__login-after">
        <Profile />
        <Alarm />
        <CreateChat />
        <LogOut 
          logout = {this.props.logout}
        />
        <TestButton />
      </ul>
    )
  }

}

