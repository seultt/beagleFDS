import React, { Component } from 'react';
import ModalLogin from '../modalLogin';

import Logined from './logined'

import logo from '../../images/logo.svg'


export default class Header extends Component {
  constructor () {
    super();
    this.state = {
      showModal: false,
      isLogin: true,
      currentUser: {
         id: 0,// user.id,
         photo: '',// user.profile_photo,
         nickname: '',// user.nickname,
         like: 0,// user.like
      }, // 로그인한 유저의 정보
      popupWindow: null,
      token: null,
      signingIn: false,
      userInfo: null,
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
  componentDidMount = () => {
    window.addEventListener('message', this.tokenHandler)
  }
  tokenHandler = (e) => {
    console.log(e);
  }
  loginWithFacebook = () => {
    const popupWindow = window.open('http://192.168.1.151:3000/auth/facebook');
    fetch('http://192.168.1.151:3000/auth/facebook', {
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Content-type': 'application/json',
      },
      method: 'GET',
    })
    .then((resp) => resp.json())
    .then( (data) => {
        console.log(data)
      }
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
                <Logined 
                  logout = {this.logout}
                />
              )
            }
          </div>
        </div>
      </header>
    );
  }
}