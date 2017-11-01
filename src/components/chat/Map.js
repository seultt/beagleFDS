/* global google */

// import React from 'react'
// import {connect} from 'react-redux'
// import { compose, withProps } from 'recompose'
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

// const MyMapComponent = compose(
//   withProps({
//     googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBZ6r3IpI_aZeZR0L_35PzUGicH81mk264",
//     loadingElement: <div style={{ height: `100%` }} />,
//     containerElement: <div style={{ height: `140px` }} />,
//     mapElement: <div style={{ height: `100%` }} />,
//   }),
//   withScriptjs,
//   withGoogleMap
// )((props) =>
//   <GoogleMap
//     defaultZoom={8}
//     defaultCenter={{ lat: props.city.lat, lng: props.city.lng }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: props.city.lat, lng: props.city.lng }} onClick={props.onMarkerClick} />}
//   </GoogleMap>
// )

// class MyFancyComponent extends React.PureComponent {
//   state = {
//     isMarkerShown: false,
//   }

//   componentDidMount() {
//     this.delayedShowMarker()
//   }

//   delayedShowMarker = () => {
//     setTimeout(() => {
//       this.setState({ isMarkerShown: true })
//     }, 3000)
//   }

//   handleMarkerClick = () => {
//     this.setState({ isMarkerShown: false })
//     this.delayedShowMarker()
//   }

//   render() {
//     return (
//       <MyMapComponent
//         isMarkerShown={this.state.isMarkerShown}
//         onMarkerClick={this.handleMarkerClick}
//         city={this.props.cities.map(city => city.value === this.props.city_id)}
//       />
//     )
//   }
// }

// const mapStateToProps = (state) => ({
//   cities: state.cities,
//   city_id: state.theRoom.chattingInfo.city_id
// })

// export default connect(mapStateToProps)(MyFancyComponent)

import React, {Component} from 'react';
import {connect} from 'react-redux'

class GoogleMap extends Component {

  componentWillReceiveProps(nextProps) {
    const selectedCity = this.props.cities.find(city => city.value === this.props.city_id)

    new google.maps.Map(this.refs.map, {
      zoom: 10,
      center: {
        lat: selectedCity.lat,
        lng: selectedCity.lng
      }
    })
  }

  render() {
    return <div style={{height:"135px", width:"276px"}} ref="map" />
  }
}

const mapStateToProps = (state) => ({
  cities: state.cities,
  city_id: state.theRoom.chattingInfo.city_id
})

export default connect(mapStateToProps)(GoogleMap)