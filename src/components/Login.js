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
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('loggedIn', true);
            })
            .catch(err => {
                this.setState({errorMessage: err.message});
          })
        }

    logout() {
        localStorage.setItem('loggedIn', false);
        localStorage.setItem('username', '');
        console.log(localStorage);
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
                <h3>Hello {localStorage.getItem('username')}!</h3>
                <hr />
                <div>
                    <p>Your user details are:</p>
                        <ul>
                            <li>Username: {localStorage.getItem('username')}</li>
                        </ul>
                </div>
                <div>
                    <button className="btn" onClick={this.logout}>Logout</button>
                </div>
            </div>
            
        )
    }

}
}

export default Login;
