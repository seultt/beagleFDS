import React, { Component } from 'react';

import message from '../../../images/icon_message.svg';

export default class Alarm extends Component {
  render () {
    return (
      <li>
        <a className="menu__message menu_icon">
          <img src={message} alt="메시지 알림" />
          <span className="red_circle">97</span>
        </a>
      </li>
    )
  }
}
