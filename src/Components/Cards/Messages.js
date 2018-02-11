import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class Messages extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex p-4 justify-content-between align-items-center">
                    <h4>Messages</h4>
                    <div className="counter all-center">
                        4
                    </div>
                </div>
                <ul>
                    <li className="p-4">
                        <div className="d-flex align-items-center">
                            <div className=" mr-4 all-center font-weight-bold">
                                <img alt="" src="styles/img/avatar.png"/>
                            </div>
                            <div>
                                <p className="font-weight-bold mb-1">
                                    Nina Jones <span className="date">about 2 minutes ago</span>
                                </p>
                                <p className="m-0">Hello! You're fired!</p>
                            </div>
                        </div>
                    </li>
                    <li className="p-4">
                        <div className="d-flex align-items-center">
                            <div className="mr-4 all-center font-weight-bold">
                                <img alt="" src="styles/img/avatar.png"/>
                            </div>
                            <div>
                                <p className="font-weight-bold mb-1">
                                    Nina Jones <span className="date">about 2 minutes ago</span>
                                </p>
                                <p className="m-0">Hello! You're fired!</p>
                            </div>
                        </div>
                    </li>
                    <li className="p-4">
                        <div className="d-flex align-items-center">
                            <div className="mr-4 all-center font-weight-bold">
                                <img alt="" src="styles/img/avatar.png"/>
                            </div>
                            <div>
                                <p className="font-weight-bold mb-1">
                                    Nina Jones <span className="date">about 2 minutes ago</span>
                                </p>
                                <p className="m-0">Hello! You're fired!</p>
                            </div>
                        </div>
                    </li>
                    <li className="p-4">
                        <div className="d-flex align-items-center">
                            <div className="mr-4 all-center font-weight-bold">
                                <img alt="" src="styles/img/avatar.png"/>
                            </div>
                            <div>
                                <p className="font-weight-bold mb-1">
                                    Nina Jones <span className="date">about 2 minutes ago</span>
                                </p>
                                <p className="m-0">Hello! You're fired!</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Messages;
