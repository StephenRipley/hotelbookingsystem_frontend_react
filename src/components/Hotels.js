import React, { Component } from 'react';
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
    
        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({
                hotels: data
            })
          })
          .catch((error) => {
            this.setState({
              error: true
            })
          });
      }

    renderItems() {
        if (!this.state.error) {
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
