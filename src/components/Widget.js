import React from 'react';

const Widget = ({xl, md, mb, label, value, title, icon}) => {
    return (
        <React.Fragment>
        {/* Content Row */}
            {/* Earnings (Monthly) Card Example */}
            <div className={`col-xl-${xl} col-md-${md} mb-${mb}`}>
              <div className={`card border-left-${label} shadow h-100 py-2`}>
                <div className="card-body">
                  <div className="row no-gutters align-items-center">
                    <div className="col mr-2">
                      <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">{title}</div>
                      <div className="h5 mb-0 font-weight-bold text-gray-800">{value}</div>
                    </div>
                    <div className="col-auto">
                      <i className={`${icon} fa-2x text-gray-300`}></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          {/* Content Row */}
        </React.Fragment>

    );
}

export default Widget;