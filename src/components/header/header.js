import React, { Component } from 'react';
import axios from 'axios';
import ModalLogin from './loginModal/modalLogin';
import Logined from './logined';
import logo from '../../images/logo.svg';
import SERVER_ADDRESS from '../../config';

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
    axios.get(`${SERVER_ADDRESS}/login`, {
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

  // 로그인 클릭시
  login = (e) => {
    const SNS_NAME = e.target.value;
    window.addEventListener('message', this.tokenHandler)
    const popupWindow = window.open(`${SERVER_ADDRESS}/auth/${SNS_NAME}`);
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
          login={this.login}
        />
        <div className="__container">
          <h1><a href="/"><img src={logo} /></a></h1>
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