import React, { Component } from 'react';
import { connect } from 'react-redux';

import {responsivMessage} from '../action/action_chatting'
import io from 'socket.io-client';
import socketIoJWT from 'socketio-jwt';
import SERVER_ADDRESS from '../config'

//  {'query': 'token=' + localStorage.getItem('jwtToken')}
const socket = io.connect(`${SERVER_ADDRESS}/chat`, {'query': 'token=' + localStorage.jwtToken})

class ChatRoom extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: '',
      messages: [{
        message: '',
        created_at: '',
        user_id: 0,
      }],
    }


  }



  componentDidMount() {  
    console.log(this.props.id)
    if (!this.props.id) {
       console.log('room-id not found')
     } else {
       socket.emit('room', {room: this.props.id});
     }
         // 다른 사용자의 메세지를 받아서 내 페이지에 보여줌 
    // render 후 e 가 발생될 때 마다 실행 
    socket.on('received chat', data => {
      console.log('received chat!!')
      console.log(data)

      this.setState({
        messages: [...this.state.messages, {message: data.message, created_at: data.created_at, user_id: data.user_id}],

      })
    })
    // (user connected) 입장시 최근 채팅로그 3개 보여줌
    socket.on('user connected', data => {
      // this.setState({
      //   messages: [...this.state.messages, {message: data.message, user_id: data.user_id}]
      // })
      console.log(data)
    })

    // (user disconnected) 사용자의 연결이 끊어졌다는 사실을 출력
    socket.on('user disconnected', data => {
      // this.setState({
      //   messages: [...this.state.messages, {message: data.message, user_id: data.user_id}]
      // })
      console.log(`${data.nickname}이 나갔습니다.`)

    })
   }
   
   componentWillReceiveProps(nextProps) {  
     console.log(nextProps.id)
     socket.emit('room', {room: nextProps.id})
   }
  
  


  // render 함수들 (나, 너, 입장/퇴장)
  showMyMSG = ({message, created_at}) => {
    return (
      <article className="contents__me">
        <div className="contents__me--box">
          <div className="text-field">
            <p>{message}</p>
            <span className="chat-date">{created_at}</span>
          </div>
        </div>
      </article>
    )
  }

  showYourMSG = ({user_id, message, created_at}) => {
    return (
      <article className="contents__another">
        <div className="contents__another--box">
          <span><img src={
            this.props.currentUser.find( another => another.id === user_id ) ? this.props.currentUser.find( another => another.id === user_id ).profile_photo : ''
            } alt="사용자"/>{
            this.props.currentUser.find( another => another.id === user_id ) ? this.props.currentUser.find( another => another.id === user_id ).nickname : 'user waiting...'
            }</span>
          <div className="text-field">
            <p>{message}</p>
            <span className="chat-date">{created_at}</span>
          </div>
        </div>
      </article>
    )
  }

  showUserEnter = (alert) => {
    return (
      <article>
        <div>
          <div className="text-field">
            <p>{alert}</p>
          </div>
        </div>
      </article>      
    )
  }

  // 입력값이 변할 때마다 state값 변경
  onTextChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  // 메세지 보내기
  sendMessage = (e) => {
    e.preventDefault();
    // 서버에 채팅로그 저장
    // const token = localStorage.getItem('jwtToken');
    // this.props.sendMessageFromDB({message: this.state.message, user_id : this.props.me.userId, id: this.props.id});

    let newMessage = this.state.message
    const hour = new Date().getHours();
    const minutes = new Date().getMinutes();
    // 내 페이지에 나의 새 메세지를 표시
    this.setState({
      message: '',
      messages: [ ...this.state.messages, {message: this.state.message, created_at: `${hour}시 ${minutes}분`, user_id: this.props.me}],
    })
    // 다른 사용자에게 새 메시지를 전달
    socket.emit('new chat', {message: newMessage, created_at: `${hour}시 ${minutes}분`, user_id: this.props.me}, data => {
      // css 변경 
    })
  }

  render () {
    // 1. map
    // 2. if 
    // (currentUser의 userId가 채팅로그의 userId와 true) <=== right 
    // contents__another 으로 랜더

    // (currentUser의 userId가 채팅로그의 userId와 false) <=== left
    // contents__me 으로 랜더
    
    
    return (
      <section className="chatting">
        <div className="chatting__contents">
          {/* {this.props.chatLogs.map( (log, i)=> {
            const user_id = log.user_id
            const message = log.message
            const created_at = log.created_at

            if(log.user_id === this.props.me) {
              return this.showMyMSG({message, created_at})
            } else {
              return this.showYourMSG({message, created_at, user_id})
            }
          })} */}
          {this.state.messages.map( (log, i)=> {
            const user_id = log.user_id
            const message = log.message
            const created_at = log.created_at

            // user_id가 없다면(0이라면) return
            if(!log.user_id) { return }

            if(log.user_id === this.props.me) {
              return this.showMyMSG({message, created_at})
            } else {
              return this.showYourMSG({message, created_at, user_id})
            }
          })}
        </div>
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
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.theRoom.chattingInfo.id,
  chatLogs: state.theRoom.chattingLog,
  me: state.userData.currentUser.id,
  currentUser: state.theRoom.currentUser,
  profile_photo: state.theRoom.currentUser.profile_photo,
})

const mapDispatchToProps = (dispatch) => ({
  responsivMessage: ({message, user_id, id}) => (dispatch(responsivMessage({message, user_id, id})))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom); 