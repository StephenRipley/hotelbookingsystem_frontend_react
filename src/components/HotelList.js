import React from 'react';
<<<<<<< HEAD

//const hotelList = createContext();
=======
>>>>>>> 50b941d6655a4f857187975594136a44e619ca14

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
