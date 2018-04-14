import React from "react";
import $ from "jquery";
import {NavLink} from 'react-router-dom';

import './Sidebar.css';

class Sidebar extends React.Component {
    componentDidMount () {
        this.timeoutId = setTimeout(function () {
          $('.mssg').addClass('new');
        }, 3000);
    }

    componentWillUnmount () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
    render() {
        const mainNav = [
            {
                Link: '/',
                icon: 'fa fa-home fa-fw" aria-hidden="true'
            },
            {
                Link: '/projects',
                icon: 'fa fa-bars fa-fw" aria-hidden="true'
            },
            {
                Link: '/statistics',
                icon: 'fa fa-signal fa-fw" aria-hidden="true'
            },
            {
                Link: '/inbox',
                icon: 'fa fa-envelope fa-fw',
                class: "mssg"

            },
            {
                Link: '/users',
                icon: 'fa fa-users fa-fw" aria-hidden="true'
            }
        ];

        return (
            <div className="LeftBar">
                <nav>
                    <ul className="SideBarList">
                        {mainNav.map((item, index) =>
                            <li key={index} className={item.class}>
                                <NavLink exact to={item.Link}  activeClassName="activeNav">
                                    <i className={item.icon}/>
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Sidebar;
