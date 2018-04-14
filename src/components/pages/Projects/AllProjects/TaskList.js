import React from 'react';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
const buttons = {
        1: 1,
        2: 2,
        3: 3,
    }
;
class TasksList extends React.Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {text: 'old'};
    }
    handleClick(e){
       console.log(e.key);

    }

    render() {
        const item = this.props.item;


        return (
            <div className="ContentItem">
                <img
                    src={item.icon}
                    alt="user-icon"
                    style={{ width: 50, height: 50 }}
                    className="ItemPhoto"
                />

                <div className="row">
                    <div>
                        <h4>
                            <a className="TitleItem">{item.title}</a>
                        </h4>

                        {this.props.listId === 3 ? (
                            <div className="ItemTime completed">
                              {' '}
                                <span></span>
                            </div>
                        ) : (
                            <div className="ItemTime">

                                <span
                                    className={`${item.isDelayed && 'active'}`}
                                >

								</span>
                            </div>
                        )}
                    </div>

                </div>
                <UncontrolledButtonDropdown>
                    <DropdownToggle caret size="lg">
                        . . .
                    </DropdownToggle>

                    <DropdownMenu>
                        <DropdownItem onClick={() => console.log(item.id+"- 2")}>2</DropdownItem>

                    </DropdownMenu>
                </UncontrolledButtonDropdown>
            </div>
        );
    }
}

export default TasksList;