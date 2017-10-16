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
      alert(token);
    }
    this.state.popupWindow.close();
    this.setState({
      token,
      signingIn: false,
      complete: true,
      popupWindow: null,
    });
    // 요 아래 메소드가 역할이 뭐에요?
    // 답변: 승하 강사님 코드 보고 복붙한거긴한데 강사님 코드랑 지극ㅁ 완전 똑같아요
    // 지금 요기에서는 auth/faceook으로 get 요청을 했고
    // 저 코드에서는 api/user로 get 요청을 했는데 각각 url 이 하는 역할 이 달라요
    // auth/faceook 은 서버와 faceook간의 오오쓰를 위해 사용되는 주소구요 (그렇기 때문에 클라이ㅓㄴ 이쪽으로 요청을 보내는게 아닐거 같고)
    // api/user는 방금 코드를 보니깐 백엔드 자체 user 데이터베이스에서 유저 정보를 가져와주는 부분인거 같아
    this.updateUserInfo();
  }

  // 유저정보 AJAX 업데이트
  updateUserInfo = () => {
    axios.get(`https://test.swtpumpkin.com/login`, { // <-- 유저 정보를 받아오는 엔드포인트를 확인후 그걸 여기에서 써주면 될거 같아요아 넵! ㅣㅈ금 옆에서 확인하고 있어요 주소가 잘못됐는지
      headers: {
        'Authorization': `Bearer ${this.state.token}`,
        'Access-Control-Allow-Origin': '*',
      }
    })
      .then( 
        (res) => {
          console.log(res);
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