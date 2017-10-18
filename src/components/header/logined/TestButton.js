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
          onClick={() =>{this.props.getChatRoomFromDB(this.state.id)}}
        >
        TEST Chatting
        </a>
      </li>
      </Link>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getChatRoomFromDB: (id) => dispatch(getChatRoomFromDB(id))
  }
}

export default connect (null, mapDispatchToProps)(LogOut)