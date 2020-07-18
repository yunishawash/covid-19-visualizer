import React from 'react';

// components
import Widget from '../components/Widget';


const SummaryWidgets = () => {
    return (
        <div className="row">
            <Widget xl={6} md={6} mb={4}  icon={'fas fa-heart'} label={'primary'}  value={2550} title={'NewConfirmed'} />
            <Widget xl={6} md={6} mb={4}  icon={'fas fa-check-circle'} label={'success'}  value={3400} title={'TotalConfirmed'} />
        </div>
    );
}

export default SummaryWidgets;