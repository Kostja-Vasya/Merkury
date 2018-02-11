import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from "./Login";
import Auth from "./Components/Auth";
import Routes from "./Routes";
import $ from 'jquery';

const Public = () => <Route path="/login" component={Login}/>;
const Protected = () => <Routes/>;

class App extends React.Component {
    render() {
    return (
        <div>
            <Public/>
            <Protected/>
        </div>
    );
  }
}

export default App;
