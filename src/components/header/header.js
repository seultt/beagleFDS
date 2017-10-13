import React, { Component } from 'react';
import ModalLogin from '../modalLogin';
import logo from '../../images/logo.svg'
import message from '../../images/icon_message.svg';


export default class Header extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      isLogin: false,
      currentUser: {
         id: 0,// user.id,
         photo: '',// user.profile_photo,
         nickname: '',// user.nickname,
         like: 0,// user.like
      }, // 로그인한 유저의 정보
    };
  }
  logout = () => {
    this.setState({ 
      isLogin: !this.state.isLogin,
      currentUser: {
        id: '',// user.id,
        photo: '',// user.profile_photo,
        nickname: '',// user.nickname,
        like: '',// user.like
      },
    })
  }

  loginWithFacebook = () => {
    fetch('http://localhost:3000/auth/facebook', {
      // headers: {
      //   // 'Accept': 'application/json',
      //   // 'Access-Control-Allow-Origin': '*',
      //   // 'Content-type': 'application/json',
      // },
      method: 'GET',
    })
    .then((resp) => resp.json())
    .then( (data) => 
      console.log(data)
    )
  }
  
  toggleLogin = () => {
    this.setState({ 
      isLogin: !this.state.isLogin,
      showModal: !this.state.showModal,
    })
  }
  handleModalOpenLogin = () => {
    this.setState({ showModal: true });
  }

  handleModalCloseLogin = () => {
    this.setState({ showModal: false });
  }

  render() {
    return(
      <header>
        <ModalLogin 
          showModal={this.state.showModal}
          toggleLogin={this.toggleLogin}
          handleModalCloseLogin={this.handleModalCloseLogin}
          currentUser={this.currentUser}
          loginWithFacebook={this.loginWithFacebook}
        />
        <div className="__container">
          <h1><img src={logo} /></h1>
          <div className="menu">
            { !this.state.isLogin ? (
              // 로그인 전
              <a
                className="menu__login-before btn"
                onClick={this.handleModalOpenLogin}
              >
                Sign Up
              </a>
              ) : (
                // 로그인 후
              <ul className="menu__login-after">
                <li>
                  <a className="menu__profile menu_icon">
                    <img src={this.state.currentUser.photo} alt="프로필" />
                  </a>
                </li>
                <li>
                  <a className="menu__message menu_icon">
                    <img src={message} alt="메시지 알림" />
                    <span className="red_circle">97</span>
                  </a>
                </li>
                <li>
                  <a className="menu__createChat btn">Travel Chat +</a>
                  <a className="menu__createChat-mobile btn">+</a>
                </li>
                <li>
                  <a
                    className="menu__createChat btn"
                    onClick={this.logout}
                  >
                  TEST LOGOUT
                  </a>
                </li>
              </ul>
              )
            }
          </div>
        </div>
      </header>
    );
  }
}