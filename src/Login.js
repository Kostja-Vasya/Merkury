import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.min';
import $ from "jquery";
let username, password;

$(document).ready(function() {

    $('.password').on('change', function(event) {
        password = event.target.value;

    });
    $('.username').on('change', function(event) {
        username = event.target.value;
    });
    $('.button-login-submit').on('click', function(event){
        console.log(username);
        console.log(password);
    });
});
class Login extends React.Component {

    render() {

        return (
            <div className="login-bg">
                <div className="login-form">
                    <header className="d-flex white justify-content-between align-items-center">
                        <img src="../styles/img/logo.png"/>
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
                        <form className="d-flex flex-column align-items-center">
                            <label>
                                <i className="fa fa-2x fa-user mb-1"/>
                                <input className="username" placeholder="Username"/>
                            </label>
                            <label>
                                <i className="fa fa-2x fa-lock mb-1" aria-hidden="true"/>
                                <input type="password"  className="password" placeholder="Password"/>
                            </label>
                            <Link to='/home' className="button-login-submit font-weight-bold all-center">Enter</Link>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
