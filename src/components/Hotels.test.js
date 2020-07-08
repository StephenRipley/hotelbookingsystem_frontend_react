import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import axios from 'axios';
//import axiosMock from '../components/__mocks__/axios-mock';
import  Hotels, { recievedData }  from './Hotels';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('that setState is called on handleClick event', () => {
    const wrapper = shallow(<Hotels />);
    const spy = jest.spyOn(wrapper.instance(), "setState");
    const mockEvent = {
        target: {
            name: "perPage",
            value: "10"
        }
    };

    wrapper.instance().handlePageClick(mockEvent);

    expect(spy).toHaveBeenCalled();
});

// test('returns hotel list', () => {
//     const hotelsInstance = shallow(<Hotels />);
//     return hotelsInstance.recievedData().then(data => {
//         expect(data).toBe('list of hotels');
//     });
// });

//   it('should fetch a list of hotels', () => {
//     jest.mock('axios');
//     const getSpy = jest.spyOn(axios, 'get');
//     const hotelsInstance = shallow(
//       <Hotels/>
//     );
//     expect(getSpy).toBeCalled();
//     expect(getSpy.mock.calls.length).toBe(1);
//     expect(getSpy.mock.results[0].value).toBe('a list of hotels');
//   });


// test('should fetch hotels', async () => {
//     jest.mock('axios');
//     const wrapper = shallow(<Hotels />);
//     const hotels = [{name: 'Bob'}];
//     const resp = {data: hotels};
//     axios.default.get.mockImplementation(() => Promise.resolve(resp))
//     //axios.get.mockResolvedValue(resp);
//     wrapper.instance().recievedData().then(data => expect(data).toEqual(hotels));
// });


test('that Hotels component renders', () => {
    const wrapper = shallow(<Hotels />);
    expect(wrapper.exists()).toBe(true);
});

describe("handleChange", () => {
test('that pagination can be changed', () => {
    const wrapper = shallow(<Hotels />);
    const mockEvent = {
        target: {
            name: "perPage",
            value: "10"
        }
    };

    const expected = {
        currentPage: 0,
        error: false,
        message: "",
        offset: 0,
        perPage: undefined
    };
    wrapper.instance().changePagination(mockEvent);
    expect(wrapper.state()).toEqual(expected);
});
});
    

describe("handleChange", () => {
test('that setState is called on handleClick event', () => {
    const wrapper = shallow(<Hotels />);
    const spy = jest.spyOn(wrapper.instance(), "setState");
    const mockEvent = {
        target: {
            name: "perPage",
            value: "10"
        }
    };

    wrapper.instance().handlePageClick(mockEvent);

    expect(spy).toHaveBeenCalled();
});
});
