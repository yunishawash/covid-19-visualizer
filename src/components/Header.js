import React from 'react';

const Header = () => {
    return (
        <React.Fragment>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
            </div>
            <div className="row">
                <div className="col-xl-12 col-md-6 mb-4" style={{textAlign: 'center'}}>
                    <div className="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary">Historical</button>
                        <button type="button" className="btn btn-secondary">Summary</button>
                        <button type="button" className="btn btn-secondary">Countries</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;