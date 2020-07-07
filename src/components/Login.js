import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

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
    }

    updateUsername(event) {
        this.setState({username: event.target.value});
    }

    updatePassword(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        const url = "http://localhost:8088/hotelbookingsystem/login/LoginUser";

        axios.post(url, {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            if(response.status === 200) {
                this.props.history.push("/hotels");
            } else if(response.status === 500) {
                alert('Incorrect login, please try again');
            }
        }

        )
        //this.props.history.push("/hotels");
    }

render() {
    return (
        <div>
            <h3>Login</h3>
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
    }

}

export default Login;