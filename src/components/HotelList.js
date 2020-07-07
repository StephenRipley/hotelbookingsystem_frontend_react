import React from 'react';

const HotelList = ({hotel}) => (
  <div className="col s12">
    <div className="card">
      <div className="card-content">
        <p>{hotel.hotelName}</p>
        <p>{hotel.city}</p>
        <p>{hotel.address}</p>
        <p>{hotel.postcode}</p>
        <p>Rooms: {hotel.numOfRooms}</p>
        <p>Amenities: {hotel.amenities}</p>
        <p>Star rating: {hotel.starRating}</p>
      </div>
      <div className="card-action">
        <a href={`http://localhost:8088/hotelbookingsystem/hotel/SeeHotelById/${hotel.hotelId}`}>Visit this lovely hotel</a>
      </div>
    </div>
  </div>
);

export default HotelList;
