import React, { Component } from 'react';
import axios from 'axios';
import HotelList from './HotelList';
import Error from './Error';

class Hotels extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hotels: [],
            error: false,
        };
    }

    componentDidMount() {
        const url = "http://localhost:8088/hotelbookingsystem/admin/AllHotels";
    
        axios.get(url)
        .then((response) => {
          this.setState({
            hotels: response.data
          })
        })
        .catch((error) => {
          this.setState({
            error: true
          })
        });
      }

    renderItems() {
        if(!this.state.error) {
          return this.state.hotels.map((hotel) => (
            <HotelList key={hotel.hotelId} hotel={hotel} />
          ));
        } else {
            return <Error />
          }
      }

    render() {
        return (
          <div className="row">
            {this.renderItems()}
          </div>
        );
      }
}

export default Hotels;
