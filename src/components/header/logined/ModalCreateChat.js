import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';

class ModalCreateChat extends Component {
  constructor(props) {
    super(props)

    this.state = {
      date: '',
      focused: '',
      cityId: 0
    }
  }

  selectedCity = (e) => {
    this.setState({
      cityId: e.target.value
    })
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
                <input type="text" />
              </div>
              <div>
                <label>title</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
    )
  }
}


const mapStateToProps = (state) => ({
  cities: state.cities,
})


export default connect (mapStateToProps)(ModalCreateChat)