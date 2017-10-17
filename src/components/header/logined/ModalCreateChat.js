import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

import postCreateToDB from '../../../action/action_createChat'

class ModalCreateChat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      start_at: '',
      city_id: 0,
      photo: null,
      name: '',
      description: '',
      focused: false,
    }
  }

  selectedCity = (e) => {
    this.setState({
      city_id: e.target.value
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

  createPayloadAndPostToDB = () => {
    if (!this.state.start_at || !this.state.city_id || !this.state.photo || !this.state.name || !this.state.description ) {
      return;
    }
    this.prop.spostCreateToDB({
      start_at: this.state.start_at,
      city_id: this.state.city_id,
      photo: this.state.photo,
      name: this.state.name,
      description: this.state.description,
      creator: 1,
    })

    this.props.shwModalCreateClose()
  }

  render () {
    return (
      <ReactModal
        isOpen={this.props.showModal}
        className="join"
        overlayClassName="join__overlay"
      >
        <div>
          <div>
            <SingleDatePicker
              date={this.state.date} // momentPropTypes.momentObj or null
              onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
              focused={this.state.focused} // PropTypes.bool
              onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
            />
            <fieldset className="selectCity">
              {this.props.cities.map(city => {
                return (
                  <div>
                    {city.city_name}
                    <input 
                      type="radio" 
                      name="city" 
                      value={city.id}
                      onChange={this.selectedCity}
                    />
                  </div>
                )
              })}
            </fieldset>
            <div className="inputRoomInfo">
              <div>
                <label>title</label>
                <input 
                  type="text"
                  onChange = {this.inputName} 
                />
              </div>
              <div>
                <label>title</label>
                <input type="text" 
                  onChange = {this.inputDescript}
                />
              </div>
            </div>
            <button 
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


export default connect ((state) => ({
  cities: state.cities,
}), (dispatch) => ({
  postCreateToDB: (create) => dispatch(postCreateToDB(create))
}))(ModalCreateChat);