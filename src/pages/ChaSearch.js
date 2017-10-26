import React, { Component } from 'react';
import {connect} from 'react-redux';

import {chatSearch} from '../action/action_chatSearch'

import search from '../images/icon_search.svg';

class ChatSearch extends Component {

  render() {
    return (
      <div className="info__search">
        <p>{this.props.name}</p>
        {/* <input type="text" 
          onChange = {(e) => {this.props.chatSearch(e.target.value)
          console.log(e.target.value)
          } }
        />
        <button><img src={search} alt="검색" /></button> */}
        {/* <button onClick={() => this.props.history.push("/")}>홈으로 가기</button> */}
      </div>
    )
  }
}

const chatInfoToProps = (state) => ({
  name: state.theRoom.chattingInfo.name
})

export default connect(chatInfoToProps)(ChatSearch)