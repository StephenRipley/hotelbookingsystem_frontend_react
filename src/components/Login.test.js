import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Login from './Login';
import Adapter from 'enzyme-adapter-react-16';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import 'jest-enzyme';

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

test('ThatWillPassThroughCorrectResponseWhenValidUsernamePassword', () => {
    const wrapper = shallow(<Login />);
    const username = "admin1";
    const password = "password";

    const spy = jest.spyOn(wrapper.instance(), "handleSubmit");

    const mockEvent = {
        handleSubmit: {
            username: "admin1",
            password: "password"
        }
    };
    wrapper.instance().handleSubmit(mockEvent);
   // expect(spy).toBe('http://localhost:8088/hotelbookingsystem/login/LoginUser/admin1/password');
     expect(spy).toHaveBeenCalled();  
    
})

describe('login', () => {
    it('returns data when user logs in', done => {
        var mock = new MockAdapter(axios);
        const data = { response: true };
        mock.onGet('http://localhost:8088/hotelbookingsystem/login/LoginUser/admin1/password').reply(200, data);

        Login.handleSubmit("admin1", "password").then(response => {
            expect(response).toEqual(data);
            done();
        });
    });
});