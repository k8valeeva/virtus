import React, { Component } from "react";
import "./HomeInbox.css";

export default class HomeInbox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inbox: [],
            newmw:0,
            unread:[true,true,false],
        };

       this.onRead = this.onRead.bind(this);
    }


   onRead=(i)=>{
       let allMssg = this.state.inbox;

       allMssg[i].status = false;
       let unreadMessages = allMssg.filter(function (el) {
           return el.status === true
       });

       this.setState({inbox:allMssg,  newmw:unreadMessages});
   };

    componentWillMount() {
        let _this =this;
        fetch("/api/user/messages",{
            headers:{
                'Content-type':'application/json'
            },
            method: 'get'
        }).then(res => res.json())
            .then(function (res) {
                let unreadMessages = res.filter(function (el) {
                    return el.status === true
                });

                console.log(unreadMessages);
                _this.setState({
                inbox:res,
                    newmw:unreadMessages
            })
        })
    }

    render() {
       let _this = this;

       const renderItems =  this.state.inbox.map(function (mssg, i) {
            /* workig _this.state.unread[i]

               var unreadClass ='unread';
           } else {
                unreadClass ='';
           }*/
           return <li className={mssg.status ? 'unread' : ''} onClick={() =>_this.onRead(i)} key={i}>{mssg.message}</li>
       });

        return (
            <div className="HomeInbox">
                <h3 className="captionStyle">Inbox({this.state.newmw.length})</h3>
                <ul className="HomeInboxList">
                    {renderItems}
                </ul>
            </div>

        );
    }
}