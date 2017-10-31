import React, { Component } from 'react';
import { connect } from 'react-redux';
import{
  withRouter,
} from 'react-router-dom';
// import { bindActionCreators } from 'redux';
import ReactModal from 'react-modal';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import VirtualizedSelect from 'react-virtualized-select';

import {postCreateToDB} from '../../../action/action_chatRoom'

class ModalCreateChat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      selectedCity: '',
      photo: null,
      name: '',
      description: '',
      focused: false,
    }
  }

  dateObjectToString = (date) => {
 
    const preDate = date._d.toString()
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const year = preDate.slice(11, 15)
    let selectedMonth = '';
    const day = preDate.slice(8, 10)
    
    months.map((month, i) => {
      if(month === preDate.slice(4, 7)) {
        selectedMonth = (i + 1).toString()
      }
    })
    
    return `${year}-${selectedMonth}-${day}`
  }

  selectedCity = (e) => {
    this.setState({
      selectedCity: e.target.value
    })
  }

  inputName = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  inputDescript = (e) => {
    this.setState({
      description: e.target.value
    })
  }
  closeAndResetValue = () => {
    this.setState({
      date: '',
      selectedCity: 0,
      photo: null,
      name: '',
      description: '',
      focused: false,
    })
    this.props.showModalCreateClose()
  }

  createPayloadAndPostToDB = () => {
    if (!this.state.date || !this.state.selectedCity.value || !this.state.name || !this.state.description ) {
      return;
    }
    
    const start_at = this.dateObjectToString(this.state.date)

    this.props.postCreateToDB({
      start_at: start_at,
      city_id: this.state.selectedCity.value,
      photo: this.state.photo,
      name: this.state.name,
      description: this.state.description,
      creator: this.props.creator.id,
    }, (id) => this.props.history.push(`/chat/${id}`))

    this.closeAndResetValue();
  }

  render () {
    return (
      <ReactModal
        isOpen={this.props.showModal}
        className="create"
        overlayClassName="create__overlay"
      >
        <div className="create-chat">
          <h2>Create Chat</h2>
          {/* <div>채팅방 사진첨부</div> */}
          <div className="selecboxes">
            {/* <fieldset className="selectCity">
              {this.props.cities.map(city => {
                return (
                  <div>
                    {city.label}
                    <input 
                      type="radio" 
                      name="city" 
                      value={city.value}
                      onChange={this.selectedCity}
                    />
                  </div>
                )
              })}
            </fieldset> */}
            <div className="selecBox__where"> 
            <VirtualizedSelect 
              placeholder="여행장소"
              options={this.props.cities}
              onChange={(selectedCity) => this.setState({ selectedCity })}
              value={this.state.selectedCity}
            />
            </div>
            <div className="selecBox__when">
            <SingleDatePicker
              date={this.state.date} // momentPropTypes.momentObj or null
              onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
              focused={this.state.focused} // PropTypes.bool
              displayFormat="YYYY-MM-DD"
              placeholder="여행 날짜"
              onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            />
            </div>
          </div>
          <div className="inputRoomInfo">
            <div className="roomInfo_name">
              <label>title</label>
              <input 
                type="text"
                placeholder="제목"
                onChange = {this.inputName} 
                value = {this.state.name}
              />
            </div>
            <div className="roomInfo_content">
              <label>content</label>
              <textarea 
                placeholder="내용"
                onChange = {this.inputDescript}
                value = { this.state.description}
              />
            </div>
          </div>
          <div className="create__chat--buttons">
            <button 
              className="del__button"
              type="button"
              onClick={this.props.showModalCreateClose}
            >
              취소
            </button>
            <button 
              className="create__button"
              type="button"
              onClick={this.createPayloadAndPostToDB}
            >
              채팅방 생성
            </button>
          </div>
        </div>
      </ReactModal>
    )
  }
}


// function mapStateToProps(state) {
//   return {cities: state.cities,}
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({postCreateToDB}, dispatch)
// }

const mapStateToProps = (state) => ({
  cities: state.cities,
  creator: state.userData.currentUser
})

const mapDispatchToProps = (dispatch) => ({
  postCreateToDB: (create, callback ) => dispatch(postCreateToDB(create, callback))
})

export default connect (mapStateToProps, mapDispatchToProps)(withRouter(ModalCreateChat));

// export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateChat)