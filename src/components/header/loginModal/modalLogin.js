import React, { Component } from 'react';
import ReactModal from 'react-modal';
import facebook from '../../../images/icon_facebook.svg';
import google from '../../../images/icon_google.svg';
import naver from '../../../images/icon_naver.svg';
import kakao from '../../../images/icon_kakao.svg';
import btn_close from '../../../images/btn_close.svg';


export default class ModalLogin extends Component {

  render() {
    return (
      <ReactModal 
        isOpen={this.props.checkModal}
        className="join"
        overlayClassName="join__overlay"
      > 
        <div className="join__container">
          <button 
            type="button"
            className="join__facebook--btn"
            onClick={this.props.login}
            value="facebook"
          >
            <img src={facebook} alt="페이스북 로고" />
            페이스북으로 계속하기
          </button>
          <button 
            type="button"
            className="join__google--btn"
            onClick={this.props.login}
            value="google"
          >
            <img src={google} alt="구글 로고" />
            구글로 계속하기
          </button>
          <button 
            type="button"
            className="join__naver--btn"
            onClick={this.props.login}
            value="naver"
          >
            <img src={naver} alt="네이버 로고" />
            네이버로 계속하기
          </button>
          <button 
            type="button"
            className="join__kakao--btn"
            onClick={this.props.login}
            value="kakao"
          >
            <img src={kakao} alt="카카오 로고" />
            카카오로 계속하기
          </button>
          <p>
          회원 가입 또는 계속하기를 클릭하면 비글의 <span>서비스 약관, 개인정보 보호정책</span>에 동의하는 것 입니다.
          </p>
        </div>
        <a type="button" className="join--closeBtn" onClick={this.props.closeModal}><img src={btn_close} alt="닫기 버튼" /></a>
      </ReactModal>
    )
  }
}