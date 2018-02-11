import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class Activity extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex p-4 justify-content-between align-items-center">
                    <h4>Activity</h4>
                    <div className="counter all-center">
                        9
                    </div>
                </div>
                <ul>
                    <li className="p-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="counter mr-4 all-center font-weight-bold">
                                <img alt="" src="styles/img/avatar.png"/>
                            </div>
                            <div>
                                <p className="font-weight-bold mb-1">
                                    James Smith <span>posted a new project</span> Free PSD template
                                </p>
                                <p className="m-0">About 2 days ago</p>
                            </div>
                        </div>
                    </li>
                    <li className="p-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="counter mr-4 all-center font-weight-bold">
                                <img alt="" src="styles/img/avatar.png"/>
                            </div>
                            <div>
                                <p className="font-weight-bold mb-1">
                                    James Smith <span>posted a new project</span> Free PSD template
                                </p>
                                <p className="m-0">About 2 days ago</p>
                            </div>
                        </div>
                    </li>
                    <li className="p-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="counter mr-4 all-center font-weight-bold">
                                <img alt="" src="styles/img/avatar.png"/>
                            </div>
                            <div>
                                <p className="font-weight-bold mb-1">
                                    James Smith <span>posted a new project</span> Free PSD template
                                </p>
                                <p className="m-0">About 2 days ago</p>
                            </div>
                        </div>
                    </li>
                    <li className="p-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="counter mr-4 all-center font-weight-bold">
                                <img alt="" src="styles/img/avatar.png"/>
                            </div>
                            <div>
                                <p className="font-weight-bold mb-1">
                                    James Smith <span>posted a new project</span> Free PSD template
                                </p>
                                <p className="m-0">About 2 days ago</p>
                            </div>
                        </div>

                    </li>
                </ul>
            </div>
        );
    }
}

export default Activity;
