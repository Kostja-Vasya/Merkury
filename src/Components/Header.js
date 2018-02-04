import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.min'
import $ from "jquery";
import './ToggleSidebar';

class Header extends React.Component {

    render() {
        return (
            <header className="header d-flex justify-content-between align-items-center">
                <div className="d-flex ml-3">
                    <div className="d-flex align-items-center toggle-sidebar">
                        <i className="fa fa-caret-left mr-0" aria-hidden="true"/>
                        <i className="fa fa-2x fa-bars ml-2" aria-hidden="true"/>
                    </div>
                    <i className="fa fa-2x fa-search" aria-hidden="true"/>
                </div>
                <div className="user-panel d-flex">
                    <Link to="/add">+ Add Project</Link>
                </div>
            </header>
        );
    }
}

export default Header;
