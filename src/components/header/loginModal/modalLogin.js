import React from 'react';
import ReactModal from 'react-modal';
import facebook from '../../../images/icon_facebook.svg';
import google from '../../../images/icon_google.svg';


export default class ModalLogin extends React.Component {

  render() {
    return (
      <ReactModal 
        isOpen={this.props.showModal}
        className="join"
        overlayClassName="join__overlay"
      > 
      <div className="join__container">
        <a 
          className="join__facebook--btn"
          onClick={this.props.loginWithFacebook}
        >
          <img src={facebook} />
          페이스북으로 계속하기
        </a>
        <a 
          className="join__google--btn"
          onClick={this.props.loginWithGoogle}
        >
          <img src={google} />
          구글로 계속하기
        </a>
        <a 
          className="join__naver--btn"
          onClick={this.props.loginWithNaver}
        >
          네이버로 계속하기
        </a>
        <a 
          className="join__kakao--btn"
          onClick={this.props.toggleLogin}
        >
          카카오로 계속하기
        </a>
        <p>
        회원 가입 또는 계속하기를 클릭하면 비글의 <span>서비스 약관, 개인정보 보호정책</span>에 동의하는 것 입니다.
        </p>
      </div>
      <button className="join--closeBtn" onClick={this.props.handleModalCloseLogin}>닫기</button>
    </ReactModal>
    )
  }
}