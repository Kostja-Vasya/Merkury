import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.min';
import {Redirect} from 'react-router-dom';
import Auth from './Components/Auth';
import Routes from'./Routes';
import DefaultLayout from "./Layouts/DefaultLayout";
import createHistory from "history/createBrowserHistory"
import Workflow from "./Workflow";

let history = createHistory();

class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
    }
    handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem("username", JSON.stringify(this.state.username));
        localStorage.setItem("password", JSON.stringify(this.state.password));
        let username = localStorage.getItem("username");
        let password = localStorage.getItem("password");
        if (password === JSON.stringify(this.state.password) && username === JSON.stringify(this.state.username)){
            console.log(username, this.state.username);
            console.log(password, this.state.password);
            Auth.isAuthenticated = true;
            if (Auth.isAuthenticated === true) {
                console.log(Auth.isAuthenticated);
                history.push('/workflow');
                return <Redirect to="/workflow"/>
            }

        }

    };
    handleChange = (event) => {
        let name = event.target.name;
        this.setState({
            [name]: event.target.value
        })
    };
    render() {

        return (
            <div className="login-bg">
                <div className="login-form">
                    <header className="d-flex white justify-content-between align-items-center">
                        <img alt="" src="../styles/img/logo.png"/>
                        <ul className="login-switch mb-0 font-weight-bold">
                            <li className="all-center">
                                Register
                            </li>
                            <li className="all-center active">
                                Login
                            </li>
                        </ul>
                    </header>
                    <div className="d-flex flex-column login-content justify-content-center">
                        <h1 className="d-flex justify-content-center">Welcome Back!</h1>
                        <form onSubmit={this.handleSubmit} className="d-flex flex-column align-items-center">
                            <label>
                                <i className="fa fa-2x fa-user mb-1"/>
                                <input onChange={this.handleChange} name="username" value={this.state.username} className="username" placeholder="Username"/>
                            </label>
                            <label>
                                <i className="fa fa-2x fa-lock mb-1" aria-hidden="true"/>
                                <input type="password" name="password" onChange={this.handleChange} value={this.state.password} className="password" placeholder="Password"/>
                            </label>
                            <button className="button-login-submit font-weight-bold all-center">Enter</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
