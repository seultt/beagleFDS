import React, { Component } from 'react';
import { connect } from 'react-redux';
import{
  withRouter,
} from 'react-router-dom';
// import { bindActionCreators } from 'redux';
import ReactModal from 'react-modal';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

import {postCreateToDB} from '../../../action/action_createChat'

class ModalCreateChat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      city_id: 0,
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
  closeAndResetValue = () => {
    this.setState({
      date: '',
      city_id: 0,
      photo: null,
      name: '',
      description: '',
      focused: false,
    })
    this.props.showModalCreateClose()
  }

  createPayloadAndPostToDB = () => {
    if (!this.state.date || !this.state.city_id || !this.state.name || !this.state.description ) {
      return;
    }
    
    const start_at = this.dateObjectToString(this.state.date)

    this.props.postCreateToDB({
      start_at: start_at,
      city_id: this.state.city_id,
      photo: this.state.photo,
      name: this.state.name,
      description: this.state.description,
      creator: 1,
    }, (id) => this.props.history.push(`/chat/${id}`))

    this.closeAndResetValue();
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
            </fieldset>
            <div className="inputRoomInfo">
              <div>
                <label>title</label>
                <input 
                  type="text"
                  onChange = {this.inputName} 
                  value = {this.state.name}
                />
              </div>
              <div>
                <label>title</label>
                <input type="text" 
                  onChange = {this.inputDescript}
                  value = { this.state.description}
                />
              </div>
            </div>
            <button 
              type="button"
              onClick={this.createPayloadAndPostToDB}
            >
              채팅방 생성
            </button>
            <button 
              type="button"
              onClick={this.props.showModalCreateClose}
            >
              취소
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
})

const mapDispatchToProps = (dispatch) => ({
  postCreateToDB: (create, callback ) => dispatch(postCreateToDB(create, callback))
})

export default connect (mapStateToProps, mapDispatchToProps)(withRouter(ModalCreateChat));

// export default connect(mapStateToProps, mapDispatchToProps)(ModalCreateChat)