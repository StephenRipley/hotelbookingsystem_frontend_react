import React from 'react';
import { shallow } from 'enzyme';
import HotelList from './HotelList';
import Hotels from './Hotels';


describe('HotelList component', () => {
    describe('when provided with an empty array of hotels', () => {
        it('contains an empty <div> element', () => {
            const hotelList = shallow(<HotelList hotels={[]}/>);
            expect(hotelList).toContainReact(<div/>);
        })
        it('does not contain any <p> elements', () => {
            const hotelList = shallow(<HotelList hotels={[]}/>);
            expect(hotelList.find('p').length).toEqual(0);
        })
    })
    describe('when provided with an array of hotels', () => {
        it('contains a matching number of <div> elements', () => {
            const hotel = ['Yotel, Edinburgh, some street, EH71 7FA'];
            const hotelList = shallow(<HotelList hotel={hotel}/>);
            expect(hotelList.find('div').length).toEqual(4);
        })
    })
})
