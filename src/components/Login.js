import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
       super(props);
        this.state={
            username:'',
            password:''
        };
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logout = this.logout.bind(this);
    }

    updateUsername(event) {
        this.setState({username: event.target.value});
    }

    updatePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const url = `http://localhost:8088/hotelbookingsystem/login/LoginUser/${this.state.username}/${this.state.password}`;

        axios.post(url, {
        })
        .then(response => {
                this.props.history.push("/hotels");
                localStorage.setItem('firstName', response.data.firstName);
                localStorage.setItem('lastName', response.data.lastName);
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('address', response.data.address);
                localStorage.setItem('loggedIn', true);
                console.log(response);
            })
            .catch(err => {
                this.setState({errorMessage: err.message});
          })
        }

    logout() {
        localStorage.setItem('firstName', '');
        localStorage.setItem('lastName', '');
        localStorage.setItem('username', '');
        localStorage.setItem('address', '');
        localStorage.setItem('loggedIn', false);
        window.location.reload(false);
    }

render() {

    if (localStorage.getItem('loggedIn') === 'false') {
        return (
            <div>
                <h3>Login</h3>
                { this.state.errorMessage &&
                <p style={{color:'red'}} className="error">Login details incorrect, please try again </p> }
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username:
                    <input type="text" value={this.state.username} onChange={this.updateUsername} />
                    </label>
                </div>
                <div>
                    <label>Password:
                    <input type="password" value={this.state.password} onChange={this.updatePassword} />
                    </label>
                </div>
                <div>
                    <input type="submit" value="Submit"/>
                </div>
             </form>
             </div>
        )

    } else {
        return (
            <div>
                <h3>Account</h3>
                <hr />
                <div>
                    <p>Your user details are:</p>
                        <ul>
                            <li>First name: {localStorage.getItem('firstName')}</li>
                            <li>Last name: {localStorage.getItem('lastName')}</li>
                            <li>Username: {localStorage.getItem('username')}</li>
                            <li>Address: {localStorage.getItem('address')}</li>
                        </ul>
                </div>
                <div>
                    <button class="btn" onClick={this.logout}>Logout</button>
                </div>
            </div>
            
        )
    }

}
}

export default Login;
