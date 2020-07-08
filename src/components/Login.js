import React, { Component } from 'react';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
       super(props);
        this.state={
            username:'',
            password:'',
            loggedIn: false
        };
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
                localStorage.setItem('username', response.data.username);
                this.setState({loggedIn: true});
            })
            .catch(err => {
                this.setState({errorMessage: err.message});
          })
        }

    clearUserDetails() {
        localStorage.clear();
        this.setState({username: '', password: ''})
    }

        usernameLoggedIn = localStorage.getItem('username');

render() {

    if (this.state.loggedIn === true) {
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
                <h3>Hello {this.usernameLoggedIn}!</h3>
                <hr />
                <div>
                    <p>Your user details are:</p>
                        <ul>
                            <li>Username: {this.usernameLoggedIn}</li>
                        </ul>
                </div>
                <div>
                    <button class="btn" onClick={this.clearUserDetails}>Logout</button>
                </div>
            </div>
            
        )
    }

}
}

export default Login;
