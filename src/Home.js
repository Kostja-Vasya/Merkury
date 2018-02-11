import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.min';
import ReportChart from "./Components/Charts/ReportChart";
import SalesChart from "./Components/Charts/SalesChart";
import Tasks from "./Components/Cards/Tasks";
import Messages from "./Components/Cards/Messages";
import Activity from "./Components/Cards/Activity";

let username = localStorage.getItem("username");
class Welcome extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}
class Home extends React.Component {

    render() {
        return (
            <div className="page w-100">
                <Welcome name={username}/>

                <div className="page-content">
                    <div className="d-flex justify-content-between mt-3">
                        <SalesChart/>
                        <ReportChart/>
                    </div>
                    <div className="home-cards d-flex justify-content-between">
                        <Tasks/>
                        <Messages/>
                        <Activity/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;
