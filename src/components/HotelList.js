import React from 'react';

//const hotelList = createContext();

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

<<<<<<< HEAD
export default HotelList ;
=======
export default HotelList;
>>>>>>> d0ec7891f3e92dce5396733a8803c69966ca0cad
