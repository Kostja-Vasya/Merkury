import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

class Tasks extends React.Component {
    render() {
        return (
            <div>
                <div className="d-flex p-4 justify-content-between align-items-center">
                    <h4>Tasks</h4>
                    <div className="counter all-center">
                        10
                    </div>
                </div>
                <ul>
                    <li className="p-4 d-flex align-items-center justify-content-between">
                       <div className="d-flex align-items-center">
                           <div className="counter mr-4 all-center font-weight-bold">
                               N
                           </div>
                           <div>
                               <p className="font-weight-bold mb-1">
                                   New Template For Sumy.co
                               </p>
                               <p className="m-0">About 2 days ago</p>
                           </div>
                       </div>
                        <i className="fa fa-2x fa-ellipsis-v mr-3" aria-hidden="true"/>
                    </li>
                    <li className="p-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="counter mr-4 all-center font-weight-bold">
                                N
                            </div>
                            <div>
                                <p className="font-weight-bold mb-1">
                                    New Template For Sumy.co
                                </p>
                                <p className="m-0">About 2 days ago</p>
                            </div>
                        </div>
                        <i className="fa fa-2x fa-ellipsis-v mr-3" aria-hidden="true"/>
                    </li>
                    <li className="p-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="counter mr-4 all-center font-weight-bold">
                                N
                            </div>
                            <div>
                                <p className="font-weight-bold mb-1">
                                    New Template For Sumy.co
                                </p>
                                <p className="m-0">About 2 days ago</p>
                            </div>
                        </div>
                        <i className="fa fa-2x fa-ellipsis-v mr-3" aria-hidden="true"/>
                    </li>
                    <li className="p-4 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div className="counter mr-4 all-center font-weight-bold">
                                N
                            </div>
                            <div>
                                <p className="font-weight-bold mb-1">
                                    New Template For Sumy.co
                                </p>
                                <p className="m-0">About 2 days ago</p>
                            </div>
                        </div>
                        <i className="fa fa-2x fa-ellipsis-v mr-3" aria-hidden="true"/>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Tasks;
