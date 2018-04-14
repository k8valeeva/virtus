import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import "./DropdownList.css";


class DropdownList extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.clearStorage = this.clearStorage.bind(this);
        this.state = {
            dropdownOpen: false,
            isLoggedIn: true
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    clearStorage() {
        localStorage.setItem ('userExist', 'no exist');
        this.props.push('/login');
    }

    render() {
        return (
            <Dropdown
                isOpen={this.state.dropdownOpen}
                toggle={this.toggle}>

                <DropdownToggle caret>
                </DropdownToggle>

                <DropdownMenu>
                    <DropdownItem>
                        <Link to="/settings">
                            Settings
                        </Link>
                    </DropdownItem>
                    <DropdownItem>
                        <Link to="" onClick={this.clearStorage}>
                            Logout
                        </Link>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default DropdownList;