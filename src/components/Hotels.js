import React, { Component } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import HotelList from './HotelList';
//import Error from './Error';

export class Hotels extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            perPage: 5,
            currentPage: 0,
            error: false,
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    recievedData() {
      const url = "http://localhost:8088/hotelbookingsystem/admin/AllHotels";
    
        axios.get(url)
        .then(response => {

          const hotels = response.data;
          const slice = hotels.slice(this.state.offset, this.state.offset + this.state.perPage)
          //// eslint-disable-next-line
          const postData = slice.map((hotel) => <React.Fragment>
            <HotelList key={hotel.hotelId} hotel={hotel} /></React.Fragment>)

          // this.setState({
          //   pageCount: Math.ceil(hotels.length / this.state.perPage),

          //   postData
          // })
        });
        
      }
      handlePageClick = (e) =>{
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
          currentPage: selectedPage,
          offset: offset
        }, () => {
          this.recievedData()
        });
      };

      changePagination = (e) =>{
        const size = e.selected;

        this.setState({
          perPage: size
        });
      };
    

    componentDidMount() {
      this.recievedData()
    }
        

    render() {
        return (
          <div className="row">
           {this.state.postData}
           <ReactPaginate
              previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}/>
          </div>
        );
      }
}

export default Hotels;
