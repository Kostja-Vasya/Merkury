import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Workflow from './Workflow';
import Statistics from './Statistics';
import Calendar from "./Calendar";
import Users from "./Users";
import Settings from './Settings';
import DefaultLayout from './Layouts/DefaultLayout';


class Routes extends Component {
    render() {
        return (

            <Switch>
                <Switch>
                    <DefaultLayout exact path="/" component={Home}/>
                    <DefaultLayout path="/calendar" component={Calendar}/>
                    <DefaultLayout path="/settings" component={Settings}/>
                    <DefaultLayout path="/users" component={Users}/>
                    <DefaultLayout path="/workflow" component={Workflow}/>
                    <DefaultLayout path="/statistics" component={Statistics}/>
                </Switch>
            </Switch>
        );
    }
}
export default Routes;
