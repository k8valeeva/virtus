import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskList from './TaskList';
import ToDoListImg from "./../../../../assets/images/ava.jpg";

import "./AllProjects.css";

const projectCategories = [

    {id:0,name:"Quened"},
    {id:1 ,name:"Planning"},
    {id:2,name:"Design"},
    {id:3 ,name:"Development"},
    {id:4 ,name:"Testing"},
    {id:5 ,name:"Completed"},
];


/*
state =

foreach projectCategories as one{ map
    ----- filter category by one
          ------- get one project item component
}

on click update state
 */





export default class AllProjects extends React.Component {

    constructor(props) {
        super(props);

        this.onDragEnd = this.onDragEnd.bind(this);
        this.cutString = this.cutString.bind(this);
        this.findSpace = this.findSpace.bind(this);
        this.state = {
            projects:[],

        };
        /*this.onReplace = this.onReplace.bind(this);*/
    }
    componentDidMount() {
        let _this =this;

        fetch("/api/all/projects",{
            headers:{
                'Content-type':'application/json'
            },
            method: 'get'
        }).then(res => res.json())
            .then(function (res) {
               _this.setState({
                    projects:res
                })
            })
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

    // onDragEnd(result) {
    //     if (!result.destination) return;
    //     const from = result.source,
    //         to = result.destination;
    //     let projects = this.state.projects;
    //     //let [removed] = projects[from.droppableId].splice(from.index, 1);
    //     // if (from.droppableId === 'completed' && to.droppableId !== 'completed')
    //     //     removed.status = to.droppableId;
    //     // if (to.droppableId === 'completed') removed.status = 'completed';
    //    // projects[to.droppableId].splice(to.index, 0, removed);
    //     this.setState({
    //         projects
    //     });
    // }
    onDragEnd(result) {
        let projects = this.state.projects;
        if (!result.destination) return;
             const from = result.source,
                 to = result.destination;
        projects[from.index].status = to.droppableId;


        this.setState({projects:projects});
    }
    catItems=()=> {
        let allProjects = this.state.projects;
        return projectCategories.map((one, index) =>
            <Droppable direction="vertical" droppableId={one.id}>
                {(provided, snapshot) => (
                    <div key={index}>
                        <h3>{one.name}</h3>


                        <ul ref={provided.innerRef}>
                            {
                                allProjects.filter(function (el) {
                                    return el.status === one.id;
                                }).map((item, index)=>
                                    <Draggable key={item.id}  draggableId={one.name}  index={index}>
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
                                                        listId={one.id}/>
                                                </div>
                                                {provided.placeholder}

                                            </li>
                                        )}
                                    </Draggable>

                                )
                            }
                            {provided.placeholder}
                        </ul>

                    </div>
                )}
            </Droppable>
        );
    };
    render() {
        return (
            <div className="Workflow">
                <div className="container">
                    <DragDropContext onDragEnd={this.onDragEnd}>
                        <div className="row">

                            {this.catItems()}

                         </div>
                    </DragDropContext>
                </div>
            </div>
        );
    }
}