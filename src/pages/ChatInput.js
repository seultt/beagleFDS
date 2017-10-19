import React, { Component } from 'react';
import { connect } from 'react-redux';

import {sendMessageFromDB} from '../action/action_chatting'

class ChatInput extends Component {
  constructor (props) {
    super(props)
    this.state = {
      message: '',
    }
  }

  onTextChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  sendMessage = (e) => {
    e.preventDefault();
    const token = localStorage.getItem('jwtToken');
    this.props.sendMessageFromDB({message: this.state.message, token, id: this.props.id});
    this.setState({
      message:'',
    })
  }

  render() {
    return (
      <div className="chatting__input">
        <input 
          type="text" 
          placeholder="type your message..."
          onChange={this.onTextChange}
          value={this.state.message}
        />
        <div className="chatting-__input--buttons">
          <button 
            className="buttons-send" 
            type="button"
            onClick={this.sendMessage}
          >
            send
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  id: state.getTheRoom.chattingInfo.id,
})
const mapDispatchToProps = (dispatch) => ({
  sendMessageFromDB: ({message, token, id}) => (dispatch(sendMessageFromDB({message, token, id})))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatInput); 

