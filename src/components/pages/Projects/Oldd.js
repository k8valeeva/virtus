import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskList from './TaskList';
import ToDoListImg from "./../../../../assets/images/ava.jpg";

import "./AllProjects.css";

const projectCategories = [
    {
        1: "Design",
        2: "Programming",
        3: "Testing",
        4: "Marketing",

    }
];
export default class AllProjects extends React.Component {\

    constructor(props) {
        super(props);

        this.onDragEnd = this.onDragEnd.bind(this);
        this.cutString = this.cutString.bind(this);
        this.findSpace = this.findSpace.bind(this);
        this.state = {
            projects:[],
            tasks: {
                toDo: [
                    {
                        title: 'New website for JCD.pl',
                        icon: ToDoListImg,
                        time: '5 days left',
                        id: 1
                    },

                    {
                        title: 'Free PSD Template vol. 3 ',
                        icon: ToDoListImg,
                        time: '5 days left',
                        id: 2
                    },



                    {
                        title: 'New website for Windu.org',
                        icon: ToDoListImg,
                        time: '5 days left',
                        id: 4
                        cat:1,
                    },

                    {
                        title: 'Free PSD Template vol. 2',
                        icon: ToDoListImg,
                        time: '5 days left',
                        id: 5
                    },

                    {
                        title: 'Iconset Vol. 3',
                        icon: ToDoListImg,
                        time: '5 days left',
                        id: 6
                    }
                ],

                inProgress: [
                    {
                        title: 'New website for Apple',
                        icon: ToDoListImg,
                        time: '1 day left',
                        id: 7
                    },
                    {
                        title: 'New logo for Google',
                        icon: ToDoListImg,
                        time: '5 days left',
                        id: 3
                    },
                    {
                        title: 'Daily UI Kit',
                        icon: ToDoListImg,
                        time: '5 days left',
                        id: 8
                    },

                    {
                        title: 'New logo for JCD.pl',
                        icon: ToDoListImg,
                        time: '2 days delays',
                        id: 9,
                        isDelayed: true
                    }
                ],

                completed: [
                    {
                        title: 'Free PSD Template vol. 1',
                        icon: ToDoListImg,
                        time: '2 days left',
                        id: 10
                    },

                    {
                        title: 'Iconset vol. 1',
                        icon: ToDoListImg,
                        time: '5 days left',
                        id: 11
                    },

                    {
                        title: 'New website for Symu.co',
                        icon: ToDoListImg,
                        time: '2 days left',
                        id: 12
                    },

                    {
                        title: 'Iconset vol. 2',
                        icon: ToDoListImg,
                        time: '2 days left',
                        id: 13
                    }
                ]
            }
        };
        this.onReplace = this.onReplace.bind(this);
    }
    onReplace=(i)=>{

        let newCat = 2;
        let allProjects = this.state.projects;

        allProjects[i].cat = newCat;


        this.setState({projects:allProjects});
    };
    cutString(string, len) {
        return string.length > len
            ? string.substring(0, this.findSpace(string, len)) + ' (...)'
            : string;
    }

    findSpace(string, idx) {
        let ind = idx;
        for (let i = idx; string[i] !== ' ' && i >= 0; i--) ind--;
        return ind;
    }

    onDragEnd(result) {
        if (!result.destination) return;
        const from = result.source,
            to = result.destination;
        let tasks = this.state.tasks;
        let [removed] = tasks[from.droppableId].splice(from.index, 1);
        if (from.droppableId === 'completed' && to.droppableId !== 'completed')
            removed.status = to.droppableId;
        if (to.droppableId === 'completed') removed.status = 'completed';
        tasks[to.droppableId].splice(to.index, 0, removed);
        this.setState({
            tasks
        });
    }

    render() {
        return (
            <div className="Workflow">
                <div className="container">
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <div className="row">
                            <Droppable direction="vertical" droppableId="toDo">
                                {(provided, snapshot) => (

                                    <div className="col col-md-4">
                                        <h3 className="WorkCaption">
                                            <a className="hvr-icon-forward">
                                                To Do{' '}
                                                <span className="amount">
													({this.state.tasks.toDo.length})
												</span>
                                            </a>
                                        </h3>

                                        <ul ref={provided.innerRef} className="test">
                                            {this.state.tasks.toDo.map(
                                                (item, index) => {
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}>
                                                            {(provided, snapshot) => (

                                                                <li className={'project'+item.id}>
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        className="mb-2">

                                                                        <TaskList
                                                                            key={item.id}
                                                                            item={item}
                                                                            listId={1}/>
                                                                    </div>
                                                                    {provided.placeholder}
                                                                </li>
                                                            )}
                                                        </Draggable>
                                                    );
                                                }
                                            )}

                                            {provided.placeholder}
                                        </ul>
                                    </div>
                                )}
                            </Droppable>

                            <Droppable direction="vertical" droppableId="inProgress">
                                {(provided, snapshot) => (

                                    <div className="col col-md-4">
                                        <h3 className="WorkCaption">
                                            <a className="hvr-icon-forward">
                                                In Progress{' '}
                                                <span className="amount">
													({this.state.tasks.inProgress.length})
												</span>
                                            </a>
                                        </h3>

                                        <ul ref={provided.innerRef}>

                                            {this.state.tasks.inProgress.map(
                                                (item, index) => {
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}>
                                                            {(provided, snapshot) => (

                                                                <li>
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        className="mb-2">

                                                                        <TaskList
                                                                            key={item.id}
                                                                            item={item}
                                                                            listId={2}/>
                                                                    </div>

                                                                    {provided.placeholder}

                                                                </li>
                                                            )}
                                                        </Draggable>
                                                    );
                                                }
                                            )}
                                            {provided.placeholder}
                                        </ul>
                                    </div>
                                )}
                            </Droppable>

                            <Droppable direction="vertical" droppableId="completed">
                                {(provided, snapshot) => (
                                    <div className="col col-md-4">

                                        <h3 className="WorkCaption">
                                            <a>
                                                Completed{' '}
                                                <span className="amount">
													({this.state.tasks.completed.length})
												</span>
                                            </a>
                                        </h3>

                                        <ul ref={provided.innerRef}>
                                            {this.state.tasks.completed.map(
                                                (item, index) => {
                                                    return (
                                                        <Draggable
                                                            key={item.id}
                                                            draggableId={item.id}
                                                            index={index}>
                                                            {(provided, snapshot) => (

                                                                <li>
                                                                    <div
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        className="mb-2">

                                                                        <TaskList
                                                                            key={item.id}
                                                                            item={item}
                                                                            listId={3}/>
                                                                    </div>
                                                                    {provided.placeholder}

                                                                </li>
                                                            )}
                                                        </Draggable>
                                                    );
                                                }
                                            )}
                                            {provided.placeholder}
                                        </ul>
                                    </div>
                                )}
                            </Droppable>
                        </div>
                    </DragDropContext>
                </div>
            </div>
        );
    }
}