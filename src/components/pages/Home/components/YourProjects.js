import React from 'react';

import "./YourProjects.css";

class YourProjects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            user: 1 // Надо тянуть не от сюда
        };
    }

    componentWillMount() {
        let _this =this;

        fetch("/api/user/projects",{
            headers:{
                'Content-type':'application/json'
            },
            method: 'get'
        }).then(res => res.json())
            .then(function (res) {
                let useProjects = res.filter(function (el) {
                    return el.userId === 1
                });

                _this.setState({
                    projects:useProjects
                })
            })
    }

    render() {
        const renderItems =  this.state.projects.map(function (project, i) {
            return <li key={i}>{project.title} {project.price}$ </li>
        });

        return(
            <div className="YourProjects">
                <h3 className="captionStyle">YourProjects</h3>
                <ul className="ProjectList">
                    {renderItems}
                </ul>
            </div>
        )
    }
}

export default YourProjects;