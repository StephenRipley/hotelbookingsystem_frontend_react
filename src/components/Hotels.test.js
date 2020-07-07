import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Hotels from './Hotels';
import Adapter from 'enzyme-adapter-react-16';
import { createPortal } from 'react-dom';

Enzyme.configure({ adapter: new Adapter() });

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
