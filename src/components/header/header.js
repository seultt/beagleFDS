import React, { Component } from 'react';
import axios from 'axios';
import ModalLogin from './loginModal/modalLogin';
import Logined from './logined';
import logo from '../../images/logo.svg';
// const API_URI = 'https://test.swtpumpkin.com/';
// const SNS_NAME = [
//   {
//     facebook: 'auth/facebook',
//     google: 'auth/google',
//     naver: 'auth/naver',
//     kakao: 'auth/kakao',
//   }
// ]

export default class Header extends Component {
  constructor () {
    super();
    this.state = {
      popupWindow: null,
      showModal: false,
      currentUser: {
        id: 0,// user.id,
        photo: '',// user.profile_photo,
        nickname: '',// user.nickname,
        like: 0,// user.like
      }, // 로그인한 유저의 정보
      isLogin: false, // 로그인 여부
      token: null,  // 토큰 여부
      signingIn: false, // 회원가입 여부
      complete: true,
      userInfo: null, // 유저의 정보
    };
  }
  
  // logout = () => {
  //   this.setState({ 
  //     isLogin: !this.state.isLogin,
  //     currentUser: {
  //       id: '',// user.id,
  //       photo: '',// user.profile_photo,
  //       nickname: '',// user.nickname,
  //       like: '',// user.like
  //     },
  //   })
  // }

  // 토큰 핸들러
  tokenHandler = (e) => {
    const token = e.data
    localStorage.setItem('jwtToken', token);
    if (token) {
      window.localStorage.token = token;
    }
    this.setState({
      token,
      signingIn: false,
      complete: true,
      popupWindow: null,
    });
    this.updateUserInfo();
  }

  // 유저정보 AJAX 업데이트
  updateUserInfo = () => {
    axios.get('https://test.swtpumpkin.com/auth/facebook', {
      headers: {
        'Authorization': `Bearer ${this.state.token}`,
      }
    })
      .then( 
        (res) => {
          console.log(res);
          const {provider, providerUserId} = res.data;
          this.setState({
            isLogin: true,
          })
        }
      )
      .catch(
        (error) => {
          console.error(error);
        }
      )
  }

  componentWillMount() {
    if (localStorage.token) {
      this.setState({
        token: localStorage.token
      })
      console.log(localStorage.token);
    }
  }

  componentDidMount() {
    if (this.state.token) {
      this.updateUserInfo()
    }
  }

  // 로그인 클릭시
  login = (e) => {
    window.addEventListener('message', this.tokenHandler)
    const popupWindow = window.open('https://test.swtpumpkin.com/auth/facebook');
    this.setState({
      popupWindow,
      signingIn: true,
    });
  }

  // 로그아웃 클릭시
  logOut = (e) => {
    delete localStorage.token
    this.setState({
      token: null,
      isLogin: false,
    })
  }

  // 로그인 토글(모달창 오픈, isLogin 변경)
  toggleLogin = () => {
    this.setState({ 
      isLogin: !this.state.isLogin,
      showModal: !this.state.showModal,
    })
  }

  // 로그인 모달창 열기
  handleModalOpenLogin = () => {
    this.setState({ showModal: true });
  }

  // 로그인 모달창 닫기
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
          loginWithFacebook={this.login}
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