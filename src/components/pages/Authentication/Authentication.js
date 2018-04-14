import React from 'react';
import { withRouter } from 'react-router-dom';

import Logo from './../../../assets/images/logo.png';
import Registration from './Registration/Registration';
import Login from './Login/Login';
import './Authentication.css';

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        }
    }

    TabsChange = (value) => {
        this.setState({
            value: value
        })
    };

    componentWillMount(){
        const { history } = this.props;
        if(localStorage.getItem('userExist') ==='exist' ){
            history.push('/')
        }
    }

    render() {
        return (
            <div className="AuthSection">
                <div className="AuthWrap">
                    <div className="AuthHeader">

                        <div className="LogoWrap">
                            <img src={Logo} alt="Logo"/>
                        </div>

                        <ul className="TabsList">
                            <li className={this.state.value === 'b' ? 'ActiveTab LoginLink' : 'LoginLink'}
                                onClick={() => this.TabsChange('a')}>
                                <p>Register</p>
                            </li>

                            <li className={this.state.value === 'a' ? 'ActiveTab RegisterLink' : 'RegisterLink'}
                                onClick={() => this.TabsChange('b')}>
                                <p>Login</p>
                            </li>
                        </ul>
                    </div>

                    <div className="TabsContent">
                        {this.state.value === 'b'
                            ? <Login/> : <Registration/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Authentication);