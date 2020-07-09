import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import axios from 'axios';
//import axiosMock from '../components/__mocks__/axios-mock';
import  Hotels, { recievedData, handlePageClick }  from './Hotels';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

it('should work', () => {
    const wrapper = shallow(<Hotels />);
    const spy = jest.spyOn(wrapper.instance(), "recievedData");
    expect(spy.mock.instances.value).toEqual("localhost")
});

it('that recievedData is called on handleClick event', () => {
    const wrapper = shallow(<Hotels />);
    const spy = jest.spyOn(wrapper.instance(), "recievedData");
    const mockEvent = {
        target: {
            name: "perPage",
            value: "10"
        }
    };

    wrapper.instance().handlePageClick(mockEvent);

    expect(spy).toHaveBeenCalled();
    expect(spy.mock.calls.length).toBe(1);
    expect(spy.mock.calls.toString()).toBe('localhost');
    
    expect(spy.mock.results).toEqual([{"type": "return", "value": undefined}]);
});

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
