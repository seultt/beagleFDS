import React, {Component} from 'react'
import {connect} from 'react-redux'

import {exitTheRoom, deleteTheRoom} from '../../action/action_profile'

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
            {
            this.props.isCreator
              ? this.deleteButton()
              : this.exitButton()
            }
        </div>
      )
    }
}

const mapDispatchToProps = (dispatch) => ({
  exitTheRoom: (room_id) => dispatch(exitTheRoom(room_id)),
  deleteTheRoom: (room_id) => dispatch(deleteTheRoom(room_id))
})

export default connect(null, mapDispatchToProps)(ProfileChatListItemButtons)