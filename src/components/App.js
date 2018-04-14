import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';


import PrivateRoute from "./routes/PrivateRoute";
import Authentication from './pages/Authentication/Authentication';
import Home from "./pages/Home/Home";
import Projects from "./pages/Projects/Projects";
import Statistics from "./pages/Statistics/Statistics";
import Inbox from "./pages/Inbox/Inbox";
import Users from "./pages/Users/Users";
import Settings from "./pages/Settings/Settings";
import NotFound from "./pages/NotFound/NotFound";


const App =() => {
    return (
        <Switch>
            <Route exact path="/login" component={Authentication} />
            <PrivateRoute exact path="/" component={Home} />
            <PrivateRoute exact path="/projects" component={Projects} />
            <PrivateRoute exact path="/statistics" component={Statistics} />
            <PrivateRoute exact path="/inbox" component={Inbox} />
            <PrivateRoute exact path="/users" component={Users} />
            <PrivateRoute exact path="/settings" component={Settings} />
            <Route component={NotFound}/>
        </Switch>
    );
};

export default App;
