import React, { Component } from 'react';
import { connect } from 'react-redux';

import ModalCreateChat from './ModalCreateChat';

class CreateChat extends Component {
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
  showModalCreateClose = () => {
    this.setState({
      isToggleCreate : false,
    })
  }

  render () {
    console.log(this.props.id+'채팅방 들어가기 전 id값')
    return (
      <li>
        <ModalCreateChat 
          showModal={this.state.isToggleCreate}
          showModalCreateClose={this.showModalCreateClose}
        />
        <a 
          className="menu__createChat btn"
          onClick={!this.props.id ? (this.shwModalCreateOpen) : ''}
        >Travel Chat +</a>
        {/* <a className="menu__createChat-mobile btn">+</a> */}
      </li>
    )
  }
}

const mapStateToProps = (state) => ({
  id: state.theRoom.chattingInfo.id,
})

export default connect (mapStateToProps)(CreateChat);