import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from "./Login";
import Home from './Home';

class Routes extends Component {
    render() {
        return (
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>

            </Switch>
        );
    }
}
/*   <Route path="/workflow" component={Workflow}/>
                <Route path="/statistics" component={Statistics}/>
               <Route path="/calendar" component={Calendar}/>
                <Route path="/users" component={Users}/> */
export default Routes;
