import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
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
                        <Link to='/' type="button" className="btn btn-primary">Timeline</Link>
                        <Link to='/summary' type="button" className="btn btn-secondary">Summary</Link>
                        <Link to='/countries-table' type="button" className="btn btn-secondary ">Countries</Link>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;