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
      focused: ''
    }
  }

  render () {
    return (
      <ReactModal
        isOpen={this.props.showModal}
        className="join"
        overlayClassName="join__overlay"
      >
        <div>
          <form>
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
                    <input type="radio" name="city" key={city.id}/>
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
          </form>
        </div>
      </ReactModal>
    )
  }
}


const mapStateToProps = (state) => ({
  cities: state.cities,
})


export default connect (mapStateToProps)(ModalCreateChat)