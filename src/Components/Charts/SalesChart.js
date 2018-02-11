import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import Chart from 'chart.js/dist/Chart.min';

let ctx = "SalesChart";

class SalesChart extends React.Component {
    componentDidMount(){
        let Sales = new Chart(ctx, {
            type: 'doughnut',
            data: Chart.data = {
                datasets: [{
                    data: [10, 20, 30, 24, 40],
                    backgroundColor:
                        [
                            '#5584ff',
                            '#4b74e0',
                            '#25396e',
                            '#3755a4',
                            '#4164c2'
                        ]
                }],
                labels: [
                    'Websites',
                    'Logo',
                    'Social Media',
                    'Adwords',
                    'E-Commerce'
                ],

            },
            options: Chart.options
        });
    }
    render() {
        return (
            <div className="page SalesChart">
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Sales</h3>
                    <button className="change-date">Period: Last Year</button>
                </div>
                <div className='h-100 d-flex align-items-center'>
                    <canvas id="SalesChart"/>
                </div>

            </div>
        );
    }
}

export default SalesChart;
