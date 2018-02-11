import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.min'
import './ToggleSidebar';
import $ from "jquery";
$(document).ready(function () {
    $('.sidebar li').on('click', function () {
        $('.sidebar .active').removeClass('active');
        $(this).addClass('active');
    });
});

class Sidebar extends React.Component {

    render() {
        return (
            <div className="sidebar">
                <img className="p-4" alt="" src="styles/img/logo.png"/>
                <nav className="white navigation">
                    <ul>
                        <Link to="/" className="white sidebar-link"><li className="active d-flex align-items-center">
                            <i className="fa fa-home" aria-hidden="true"/>
                            <span>Home</span>
                        </li>
                        </Link>
                        <Link to="/workflow" className="white sidebar-link">
                            <li className="d-flex align-items-center">
                            <i className="fa fa-bars" aria-hidden="true"/>
                            <span>Workflow</span>
                        </li>
                        </Link>
                        <Link to="/statistics" className="white sidebar-link"><li className="d-flex align-items-center">
                            <i className="fa fa-line-chart" aria-hidden="true"/>
                            <span>Statistics</span>
                        </li>
                        </Link>
                        <Link to="/calendar" className="white sidebar-link"><li className="d-flex align-items-center">
                            <i className="fa fa-calendar" aria-hidden="true"/>
                            <span>Calendar</span>
                        </li>
                        </Link>
                        <Link to="/users" className="white sidebar-link"><li className="d-flex align-items-center">
                            <i className="fa fa-user" aria-hidden="true"/>
                            <span>Users</span>
                        </li>
                        </Link>
                        <Link to="/settings" className="white sidebar-link"><li className="d-flex align-items-center">
                            <i className="fa fa-cog" aria-hidden="true"/>
                            <span>Settings</span>
                        </li>
                        </Link>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Sidebar;
