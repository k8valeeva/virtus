import React from 'react';
import { withRouter } from 'react-router-dom';
import './../AuthWrap.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { history } = this.props;
        localStorage.setItem("username", JSON.stringify(this.state.username));
        localStorage.setItem("password", JSON.stringify(this.state.password));
        localStorage.setItem('userExist', 'exist');
        alert('Welcome!');
        history.push('/');
    };

    handleChange = (e) => {
        let name = e.target.name;
        this.setState({
            [name]:e.target.value
        })
    };


    render() {
        return (
            <div>
                <form  className="AuthForm RegPadding" onSubmit={this.handleSubmit}>
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

                    <button className="SignBtn" type="submit">Register</button>
                </form>
            </div>
        );
    }
}

export default withRouter(Register);