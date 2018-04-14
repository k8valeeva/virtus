import React from 'react';
import { withRouter } from 'react-router-dom';
import './../AuthWrap.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('username - ', this.state.username, 'pass - ', this.state.password);

        const { history } = this.props;

        const data = {
            login:this.state.username.trim(),
            pass:this.state.password.trim()
        };

        fetch('/api/user', {
            headers: {
                'Content-type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(res => {
                localStorage.setItem('userExist', res.userExist);
                localStorage.setItem('username', this.state.username);
                history.push('/')
            });
    };

    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]:e.target.value
        })
    };

    render() {
        console.log(this.state);

        return (
            <div>
                <h2>Welcome<span>back!</span></h2>

                <form className="AuthForm" onSubmit={this.handleSubmit}>
                    <input
                        name='username'
                        value={this.state.username}
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Username"
                        required
                    />

                    <input
                        name='password'
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                        placeholder="Password"
                        required
                    />

                    <button className="SignBtn" type="submit">Enter</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Login);