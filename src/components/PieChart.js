import React, {useEffect} from 'react';


const PieChart = ({xl, lg}) => {

    useEffect(() => {
        // Pie Chart Example
        var ctx = document.getElementById("myPieChart");
        var myPieChart = new window.Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ["Direct", "Referral", "Social"],
            datasets: [{
                data: [55, 30, 15],
                backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
                hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
                hoverBorderColor: "rgba(234, 236, 244, 1)",
            }],
        },
        options: {
            maintainAspectRatio: false,
            tooltips: {
            backgroundColor: "rgb(255,255,255)",
            bodyFontColor: "#858796",
            borderColor: '#dddfeb',
            borderWidth: 1,
            xPadding: 15,
            yPadding: 15,
            displayColors: false,
            caretPadding: 10,
            },
            legend: {
            display: false
            },
            cutoutPercentage: 80,
        },
        });
    }, []);// pass empty array to load the chart only once

    return (
        <React.Fragment>
            {/* Pie Chart */}
                <div class={`col-xl-${xl} col-lg-${lg}`}>
                    <div class="card shadow mb-4">
                        {/* Card Header - Dropdown */}
                        <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 class="m-0 font-weight-bold text-primary">Revenue Sources</h6>
                        </div>
                        {/* Card Body */}
                        <div class="card-body">
                        <div class="chart-pie pt-4 pb-2">
                            <canvas id="myPieChart"></canvas>
                        </div>
                        <div class="mt-4 text-center small">
                            <span class="mr-2">
                            <i class="fas fa-circle text-primary"></i> Direct
                            </span>
                            <span class="mr-2">
                            <i class="fas fa-circle text-success"></i> Social
                            </span>
                            <span class="mr-2">
                            <i class="fas fa-circle text-info"></i> Referral
                            </span>
                        </div>
                        </div>
                    </div>
                </div>
            {/* Pie Chart */}
        </React.Fragment>
    );
}

export default PieChart;