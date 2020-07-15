import React from 'react';

const Header = () => {
    return (
        <React.Fragment>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
            </div>
            <div class="row">
                <div class="col-xl-12 col-md-6 mb-4" style={{textAlign: 'center'}}>
                    <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-secondary">Historical</button>
                        <button type="button" class="btn btn-secondary">Summary</button>
                        <button type="button" class="btn btn-secondary">Countries</button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default Header;