import React from 'react';
import { Row } from 'reactstrap';

import HomeLineChart from "./components/charts/HomeLineChart";
import YourProjects from "./components/YourProjects";
import HomeSalesChart from "./components/charts/HomeSalesChart";
import HomeInbox from "./components/HomeInbox";
import Calendar from "./components/calendar/Calendar";
import "./Home.css";


class Home extends React.Component {
    render() {
        return(

            <div className="HomePage">
                <div className="main">
                    <div></div>
                    <div></div>
                </div>
                <Row className="FirstRow">

                    <HomeLineChart/>
                    <YourProjects/>
                </Row>

                <Row>
                    <HomeSalesChart/>
                    <HomeInbox/>
                    <Calendar/>
                </Row>
            </div>

        )
    }
}

export default Home;