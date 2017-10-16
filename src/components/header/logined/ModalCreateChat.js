import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';

class ModalCreateChat extends Component {


  render () {
    return (
      <ReactModal
        isOpen={this.props.showModal}
        className="join"
        overlayClassName="join__overlay"
      >
        <div>
          <form>
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