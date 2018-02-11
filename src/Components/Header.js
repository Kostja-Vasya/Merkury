import React from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.min'
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
                    <Link to="/add" className="add-button">+ Add Project</Link>
                    <i className="fa fa-2x fa-envelope" aria-hidden="true"/>
                    <i className="fa fa-2x fa-bell" aria-hidden="true"/>
                    <div className="dropdown mr-4">
                        <div className="d-flex align-items-center dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img alt="" src="styles/img/avatar.png"/>
                        </div>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                            <Link to="/" className="dropdown-item" >Action</Link>
                            <Link to="/" className="dropdown-item">Another action</Link>
                            <Link to="/" className="dropdown-item">Something else here</Link>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
