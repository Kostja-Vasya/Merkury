import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.min';
import Chart from 'chart.js/dist/Chart.min';
let ctx = "ReportChart";


class ReportChart extends React.Component {
    componentDidMount(){
        let ReportChart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    label: 'Report',
                    backgroundColor: 'transparent',
                    borderColor: 'blue',
                    lineHeight: 20,
                    data: [{
                        x: -10,
                        y: 200
                    },
                        {
                            x: -5,
                            y: 350
                        },
                        {
                            x: 0,
                            y: 600
                        },
                        {
                            x: 5,
                            y: 350
                        },{
                            x: 10,
                            y: 200
                        }]
                }]
            },
            options: {
                layout: {
                    padding: {
                        top: 0,
                        left: 0 ,
                        right: 50,
                        bottom: 0
                    }
                },
                scales: {
                    xAxes: [{
                        type: 'linear',
                        ticks: {fontColor: '#fff'
                        }
                    }],
                    yAxes: [{
                        ticks: {

                            suggestedMin: 150,
                            suggestedMax: 800,
                        }
                    }]
                }
            }

        });
    }
    render() {
        return (
            <div className="page ReportChart">
                <div className="d-flex justify-content-between align-items-center">
                    <h3>Report</h3>
                    <button className="change-date">Period: Last Year</button>
                </div>
                <canvas id="ReportChart"/>
            </div>
        );
    }
}

export default ReportChart;
