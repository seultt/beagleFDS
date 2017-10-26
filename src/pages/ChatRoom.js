import React, { Component } from 'react';
import { connect } from 'react-redux';
// import Highlighter from './Highlighter'

import {createdTheLog, enterTheChat} from '../action/action_chatting'

class ChatRoom extends Component {

  constructor(props) {
    super(props)
    this.state = {
      message: '',
    }
  }

  
  
  componentDidMount () {
    // 다른 사용자의 메세지를 받아서 내 페이지에 보여줌 
    // render 후 e 가 발생될 때 마다 실행 
    this.props.socket.on('received chat', data => {
      console.log('received chat!!')
      console.log(data)
      this.props.createdTheLog(data)
    })

    this.props.socket.on('user connected', data => {
      console.log(`${data.nickname} 님이 들어오셨습니다..`)
    })
    this.props.socket.on('user disconnected', data => {
      console.log(`${data.nickname} 님이 나갔습니다.`)
    })

    // scroll Event 발생
    const target = document.querySelector('div.chatting__contents')
    target.addEventListener('scroll', this.handleOnScroll);
  }

  // props 변화에 따라 스크롤 위치 조정
  componentDidUpdate = (prevProps, prevState) => {
    const target = document.querySelector('div.chatting__contents')
    if (prevProps.chatLogs.length !== this.props.chatLogs.length) {
      setTimeout(target.scrollTop = target.scrollHeight - (target.scrollHeight-700), 2000)      
    }
    if (prevProps.chatLogs[prevProps.chatLogs.length-1] !== this.props.chatLogs[this.props.chatLogs.length-1]){
      target.scrollTop = target.scrollHeight
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.currentUser)
  }

  // 타겟의 scroll 위치 값 계산해주는 함수
  getDistFromBottom = () => {
    const target = document.querySelector('div.chatting__contents')
    const scrollTop = (target && target.scrollTop) || target.scrollTop;

    return Math.ceil(scrollTop)
  }

  // scrollTop 이 0 이면 ACTION getTheData 실행, 현재 페이지 값을 넘겨 주어 다음 페이지를 받아 온다.
  handleOnScroll = () => {
    const scrolledToTOP = this.getDistFromBottom();
    // console.log(scrolledToTOP +"!!")
    // console.log('들어왔다.')

    if(!scrolledToTOP) {
      // console.log('들어왔니?')
      this.props.socket.emit('log request', {id: this.props.chatLogs[0].id}, data => {
        this.props.enterTheChat(data.logs.reverse())
      })
    }
  }

  // render 함수들 (나, 너, 입장/퇴장)
  showMyMSG = ({message, created_at, id}) => {
    return (
      <article key={id} className="contents__me">
        <div className="contents__me--box">
          <div className="text-field">
            <p>{message}</p>
            <span className="chat-date">{created_at}</span>
          </div>
        </div>
      </article>
    )
  }


  showYourMSG = ({user_id, message, created_at, id}) => {
    return (
      <article key={id} className="contents__another">
        <div className="contents__another--box">
          <span><img src={
            this.props.currentUser.find( another => another.user_id === user_id ) ? this.props.currentUser.find( another => another.user_id === user_id ).profile_photo : ''
            } alt="익명"/>{
            this.props.currentUser.find( another => another.user_id === user_id ) ? this.props.currentUser.find( another => another.user_id === user_id ).nickname : '(알수없음)'
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
    
    // 다른 사용자에게 새 메시지를 전달
    this.props.socket.emit('new chat', {message: this.state.message, room_id: this.props.id, user_id: this.props.me}, data => {
      console.log('새로운 메세지 전달')
      this.props.createdTheLog(data) 
    })

    this.setState({
      message: '',
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
          {this.props.chatLogs.map( (log, i)=> {
            const id = log.id
            const user_id = log.user_id
            const message = log.message
            const created_at = log.created_at

            if(log.user_id === this.props.me) {
              return this.showMyMSG({message, created_at, id})
            } else {
              return this.showYourMSG({message, created_at, user_id, id})
            }
          })}
          {/* {this.state.messages.map( (log, i)=> {
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
          })} */}
        </div>
        <form 
          className="chatting__input"
          onSubmit={this.sendMessage}
        >
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
        </form>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  id: state.theRoom.chattingInfo.id,
  chatLogs: state.chatLogs.chattingLog,
  me: state.userData.currentUser.id,
  currentUser: state.theRoom.currentUser,
  profile_photo: state.theRoom.currentUser.profile_photo,
})

const mapDispatchToProps = (dispatch) => ({
  createdTheLog: (log) => (dispatch(createdTheLog(log))),
  enterTheChat: (logs) => (dispatch(enterTheChat(logs))),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatRoom); 