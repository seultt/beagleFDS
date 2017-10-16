import React, { Component } from 'react';

import ModalCreateChat from './ModalCreateChat';

export default class CreateChat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isToggleCreate : false,
    }
  }

  shwModalCreateOpen = () => {
    this.setState({
      isToggleCreate : true,
    })
  }

  render () {
    return (
      <li>
        <ModalCreateChat 
          showModal={this.state.isToggleCreate}
        />
        <a 
          className="menu__createChat btn"
          onClick={this.shwModalCreateOpen}         
        >Travel Chat +</a>
        {/* <a className="menu__createChat-mobile btn">+</a> */}
      </li>
    )
  }
}

