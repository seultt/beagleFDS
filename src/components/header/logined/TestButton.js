import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {getChatRoomFromDB} from '../../../action/action_createChat'

class LogOut extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 1,
    }
  }

  render () {
    return (
      <Link to={`/chat/1`}>
      <li>
        <a
          className="menu__createChat btn"
          onClick={() =>{this.props.getChatRoomFromDB({id: this.state.id, user_id: this.props.user_id})}}
        >
        TEST Chatting
        </a>
      </li>
      </Link>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user_id: state.userData.currentUser.id,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getChatRoomFromDB: ({id, user_id}) => dispatch(getChatRoomFromDB({id, user_id}))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(LogOut)