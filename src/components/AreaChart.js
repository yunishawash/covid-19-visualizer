import React, {useEffect, useState} from 'react';
import { useSelector } from 'react-redux'
import axios from 'axios';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";

const AreaChart = ({xl = 12, lg = 12}) => {

    // get interval state from redux 
    const interval = useSelector(state => state.interval);

    const covic19CasesApi = `https://disease.sh/v3/covid-19/historical/all?lastdays=${interval}`;

    // create state and mutator for the cases data
    useEffect(() => { 
        
        // creating the cart const
        const chart = am4core.create("chartdiv", am4charts.XYChart);
        // get the data from the api
        axios.get(covic19CasesApi).then(({data}) => {

            let graphData = [];

            // looping over the cases object
            for (const casesInDate in data.cases) {
                graphData.push({ 
                    date: casesInDate,
                    name: "cases",
                    case: data.cases[casesInDate]
                });
            }

            // push the data array into the graph 
            chart.data = graphData;

            // Create axes
            var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
            dateAxis.renderer.minGridDistance = 120;
            dateAxis.gridIntervals.setAll([
                { timeUnit: "day", count: 1 }, // handle the minimize scale which is day (for smooth graph)
                { timeUnit: "month", count: 0.5 } // handle the wanted scale which is months
            ]);

            // push the values axis into the y axis
            chart.yAxes.push(new am4charts.ValueAxis());

            // Create series
            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = "case"; // set the value for the y axis
            series.dataFields.dateX = "date";// set the date for the x axis
            series.tooltipText = "{value}"
            series.strokeWidth = 3;

            series.tooltip.pointerOrientation = "vertical";

            chart.cursor = new am4charts.XYCursor();
            chart.cursor.snapToSeries = series;
            chart.cursor.xAxis = dateAxis;

            // adding XY chart scrollbar for zoomin-zoomout
            let scrollbarX = new am4charts.XYChartScrollbar();
            scrollbarX.series.push(series);
            chart.scrollbarX = scrollbarX;

        });


        return () => {
            // disponse the chart when the component is unmounted
            chart.dispose();
        };

    }
    , [covic19CasesApi]); // pass empty array to load the chart only once

    return (
        <div className="row" style={{height:'650px'}}>
            {/* Area Chart */}
            <div className={`col-xl-${xl} col-lg-${lg}`}>
                <div className="card shadow area-chart-card mb-4">
                {/* Card Header - Dropdown */}
                <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Covid19 cases evolve in {interval} days</h6>
                </div>
                {/* Card Body */}
                <div className="card-body">
                    <div className="chart-area">
                        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
                    </div>
                </div>
                </div>
            </div>
        {/* Area Chart */}
        </div>
    );
}

export default AreaChart;