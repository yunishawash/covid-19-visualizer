import React, {useEffect, useState} from 'react';
import axios from 'axios';
// components
import Widget from '../components/Widget';
import SummaryXYChart from '../components/SummaryXYChart';

const SummaryWidgets = ({xl = 12, lg = 12}) => {
    // summary api
    const covic19SummaryApi = `https://api.covid19api.com/summary`;
    // create state and mutator for the cases data
    const [globalSummary, setGobalSummary] = useState(0);
    useEffect(() => { 
        // get the data from the api
        const getData = async () => {
            const {data} = await axios.get(covic19SummaryApi);
            // updateing the globalSummary data, to pass it into childrens
            setGobalSummary(data.Global);
        };
        // calling the sync function
        getData();
    }
    , []); // pass empty array to load the chart only once

    return (
        <React.Fragment>
            <div className="row">
                <Widget xl={4} md={4} mb={4}  icon={'fas fa-asterisk'} label={'primary'}  value={(globalSummary.NewConfirmed)??0} title={'New Confirmed'} />
                <Widget xl={4} md={4} mb={4}  icon={'fas fa-heart'} label={'success'}  value={(globalSummary.NewRecovered)??0} title={'New Recovered'} />
                <Widget xl={4} md={4} mb={4}  icon={'fas fa-heart-broken'} label={'danger'}  value={(globalSummary.NewDeaths)??0} title={'New Deaths'} />
            </div>
            <div className="row" style={{height:'650px'}}>
                <SummaryXYChart xl={12} md={12} mb={12}  globalSummary={globalSummary} />
            </div>
        </React.Fragment>
    );
}

export default SummaryWidgets;