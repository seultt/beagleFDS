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
  constructor(props) {
    super(props);
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
    };
  }

  // 토큰 핸들러
  tokenHandler = (e) => {
    const token = e.data;
    localStorage.setItem('jwtToken', token);
    if (token) {
      window.localStorage.token = token;
    }
    this.state.popupWindow.close();
    this.setState({
      token,
      signingIn: false,
      complete: true,
    });
    this.updateUserInfo();
  }

  // 유저정보 AJAX 업데이트
  updateUserInfo = () => {
    axios.get(`https://test.swtpumpkin.com/login`, {
      headers: {
        'Authorization': `Bearer ${this.state.token}`,
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then( 
        (res) => {
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
    }
  }

  componentDidMount() {
    if (this.state.token) {
      this.updateUserInfo()
    }
  }
c
  componentWillUnmount() {
    window.removeEventListener('message', this.tokenHandler)
  }

  // 페이스북 로그인 클릭시
  facebook_login = (e) => {
    window.addEventListener('message', this.tokenHandler)
    const popupWindow = window.open('https://test.swtpumpkin.com/auth/facebook');
    this.setState({
      popupWindow,
      signingIn: true,
      showModal: false,
    });
  }
  // 구글 로그인 클릭시
  google_login = (e) => {
    window.addEventListener('message', this.tokenHandler)
    const popupWindow = window.open('https://test.swtpumpkin.com/auth/google');
    this.setState({
      popupWindow,
      signingIn: true,
      showModal: false,
    });
  }
  // 네이버 로그인 클릭시
  naver_login = (e) => {
    window.addEventListener('message', this.tokenHandler)
    const popupWindow = window.open('https://test.swtpumpkin.com/auth/naver');
    this.setState({
      popupWindow,
      signingIn: true,
      showModal: false,
    });
  }
  // 카카오 로그인 클릭시
  kakao_login = (e) => {
    window.addEventListener('message', this.tokenHandler)
    const popupWindow = window.open('https://test.swtpumpkin.com/auth/kakao');
    this.setState({
      popupWindow,
      signingIn: true,
      showModal: false,
    });
  }

  // 로그아웃 클릭시 (테스트)
  logout = (e) => {
    delete localStorage.token
    this.setState({
      token: null,
      userInfo: null,
    });
  }

  // 로그인 토글(모달창 오픈, isLogin 변경)
  toggleLogin = () => {
    this.setState({ 
      isLogin: !this.state.isLogin,
      showModal: !this.state.showModal,
    });
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
          loginWithFacebook={this.facebook_login}
          loginWithGoogle={this.google_login}
          loginWithNaver={this.naver_login}
          loginWithKakao={this.kakao_login}
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
                  logout={this.logout}
                />
              )
            }
          </div>
        </div>
      </header>
    );
  }
}