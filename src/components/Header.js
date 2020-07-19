import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const Header = () => {

    // setting state and a function for the selected page
    const [selectedTab, setSelectedTab] = useState(window.location.pathname);

    return (
        <React.Fragment>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
            </div>
            <div className="row">
                <div className="col-xl-12 col-md-6 mb-4" style={{textAlign: 'center'}}>
                    <h1>COVID-19-VISUALIZER</h1>
                </div>
                <div className="col-xl-12 col-md-6 mb-4" style={{textAlign: 'center'}}>
                    <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <Link to='/' onClick={() => { setSelectedTab("/") }} type="button" className={`btn ${(selectedTab === '/')?'btn-primary':'btn-secondary'} `}>Timeline</Link>
                        <Link to='/summary' onClick={() => { setSelectedTab("/summary") }} type="button" className={`btn ${(selectedTab === '/summary')?'btn-primary':'btn-secondary'} `}>Summary</Link>
                        <Link to='/countries-table' onClick={() => { setSelectedTab("/countries-table") }} type="button" className={`btn  ${(selectedTab === '/countries-table')?'btn-primary':'btn-secondary'} `}>Countries</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;