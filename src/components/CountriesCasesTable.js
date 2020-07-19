import React, { useEffect } from 'react';

// import libraries loaded in index.html
const $ = window.$;

const CountriesCasesTable = ({xl, lg}) => {

    // summary api
    const covid19SummaryApi = `https://api.covid19api.com/summary`;

    useEffect(() => {


      $('#dataTable').DataTable({
        autoWidth: false,
        ajax: {
            url: covid19SummaryApi,
            type: 'get',
            dataSrc: (json) => {
                return json.Countries;
            }
        },
        columns: [
            {"data": "Country"},
            {"data": "NewConfirmed"},
            {"data": "TotalConfirmed"},
            {"data": "NewDeaths"},
            {"data": "NewRecovered"},
            {"data": "TotalRecovered"}
          ],
        //   columnDefs: [
        //     {
        //     }
        //   ]
      });
    }, [covid19SummaryApi]);// adding covid19SummaryApi for the dependency array, despite it won't be changed 

    return (
        <React.Fragment>
            <div className={`col-xl-${xl} col-lg-${lg}`}>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
                    </div>
                    <div className="card-body">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                            <th>Country Name</th>
                            <th>New Confirmed</th>
                            <th>Total Confirmed</th>
                            <th>New Deaths</th>
                            <th>New Recovered</th>
                            <th>Total Recovered</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Tiger Nixon</td>
                            <td>System Architect</td>
                            <td>Edinburgh</td>
                            <td>61</td>
                            <td>2011/04/25</td>
                            <td>$320,800</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                    </div>
                </div>
            </div>
            
        </React.Fragment>
    );
}

export default CountriesCasesTable;