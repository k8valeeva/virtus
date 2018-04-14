import React from 'react';
import { Route, Redirect } from 'react-router-dom';


import './PrivateRoute.css';
import TopBar from "../pages/Bars/TopBar/TopBar";
import Sidebar from "../pages/Bars/Sidebar/Sidebar";

const PrivateRoute = ({component: Component, ...rest}) => {
    return(
        <Route {...rest} render={matchProps => {
            const userExist = localStorage.getItem('userExist');

            if (userExist === 'exist') {
                return (
                    <div>
                        <TopBar/>
                        <div className="PageStyle">
                            <Sidebar/>
                            <div className="PageWrap">
                                <Component {...matchProps}/>
                            </div>
                        </div>
                    </div>

                );
            }
            else {
                return(
                    <Redirect to="/login" />
                );
            }
        }} />
    )
};

export default PrivateRoute;