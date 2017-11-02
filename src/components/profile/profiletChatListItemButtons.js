import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {exitTheRoom, deleteTheRoom} from '../../action/action_profile'
import {getChatRoomFromDB} from '../../action/action_chatRoom'

class ProfileChatListItemButtons extends Component {
  constructor(props) {
    super(props)

    this.deleteButton = this.deleteButton.bind(this)
    this.exitButton = this.exitButton.bind(this)
  }

  deleteButton() {
    return (
      <a onClick={() => {this.props.deleteTheRoom(this.props.id)}}>삭제하기</a>
    )
  }

  exitButton() {
    return (
      <a onClick={() => {this.props.exitTheRoom(this.props.id)}}>나가기</a>
    )
  }

  render() {
      return (
        <div className="profile__chat-list--card--footer--right">
          <Link to={`/chat/${this.props.id}`}>
            <li>
              <a
              onClick={() =>{this.props.getChatRoomFromDB({id: this.props.id, user_id: this.props.user_id})}}
              >들어가기</a>
            </ li>
          </ Link>
            {
            this.props.isCreator
              ? this.deleteButton()
              : this.exitButton()
            }
        </div>
      )
    }
}

const mapStateToProps = (state) => ({
  user_id: state.userData.currentUser.id
})

const mapDispatchToProps = (dispatch) => ({
  exitTheRoom: (room_id) => dispatch(exitTheRoom(room_id)),
  deleteTheRoom: (room_id) => dispatch(deleteTheRoom(room_id)),
  getChatRoomFromDB: ({id, user_id}) => dispatch(getChatRoomFromDB({id, user_id}))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProfileChatListItemButtons)