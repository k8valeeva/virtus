import React from 'react';

import AllProjects from "./AllProjects/AllProjects";
import Workflow from "./Workflow/Workflow";

import "./Projects.css";


class Projects extends React.Component {
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

    render() {
        return(
            <div className="Projects">
                <div className="ProjectsWrap">
                    <div className="ProjectsHeader">
                        <div>
                            <ul className="TabsProjects">
                                <li className={this.state.value === 'b' ? 'ActiveTab WorkflowLink' : '<WorkflowLink'}
                                    onClick={() => this.TabsChange('a')}>
                                    All Projects
                                </li>

                                <li className={this.state.value === 'a' ? 'ActiveTab AllProjectsLink' : '<AllProjectsLink'}
                                    onClick={() => this.TabsChange('b')}>
                                    Workflow
                                </li>
                            </ul>
                        </div>

                        <div className="ProjectsSort">
                            <p>Show Projects :</p>

                            <select className="ProjectsSelect">
                                <option value=''>
                                    All
                                </option>

                                <option value=''>
                                    All
                                </option>
                            </select>
                        </div>
                    </div>

                    <div className="TabsContent">
                        {this.state.value === 'b'
                            ? <Workflow/> : <AllProjects/>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;