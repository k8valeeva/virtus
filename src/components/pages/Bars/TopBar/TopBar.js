import React from 'react';

import Logo from './../../../../assets/images/logo.png';
import Ava from './../../../../assets/images/ava.jpg';
import './TopBar.css';
import DropdownList from "./components/DropdownList";
import Search from "./Search";


class TopBar extends React.Component {

    render() {
        return(
            <div className="TopBar">
                <div>
                    <img src={Logo} alt="Virtus"/>
                </div>

                <div className="UserBtnNav">
                    <button className="AddBtn">
                        <p>Add
                            <i className="fa fa-plus"/>
                        </p>
                    </button>

                    <Search/>

                    <button>
                        <i className="fa fa-bell"/>
                    </button>

                    <div className="UserIcon">
                        <img
                            src={Ava}
                            alt="user-ava"
                            style={{ width: 50, height: 50 }}
                            className="avaImg"
                        />
                    </div>

                    <DropdownList/>
                </div>

            </div>

        )
    }
}

export default TopBar;