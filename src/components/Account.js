import React, { Component } from 'react';

class Account extends Component {

    render() {
        return (
            <div>
                <h3>Account</h3>
                <hr />
                <div>
                    <p>Your user details are:</p>
                    <ul>
                        <li>First name: {localStorage.getItem('firstName')} </li>
                        <li>Last name: {localStorage.getItem('lastName')} </li>
                        <li>Username: {localStorage.getItem('username')} </li>
                        <li>Address: {localStorage.getItem('address')} </li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Account;