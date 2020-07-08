import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Login from './Login';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('that Login component renders', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.exists()).toBe(true);
});

describe("handleChange", () => {
    test('that setState is called on updateUsername event', () => {
        const wrapper = shallow(<Login />);
        const spy = jest.spyOn(wrapper.instance(), "setState");
        const mockEvent = {
            target: {
                name: "username",
                value: "John"
            }
        };
        wrapper.instance().updateUsername(mockEvent);
        expect(spy).toHaveBeenCalled();
    });
});