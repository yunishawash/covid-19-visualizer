import React from 'react';
import Header from './components/Header';
import Widget from './components/Widget';
import AreaChart from './components/AreaChart';
import PieChart from './components/PieChart';
import CountriesCasesTable from './components/CountriesCasesTable';
import Footer from './components/Footer';


const App = () => {
    return (
        <React.Fragment>
            <div id="content" style={{marginTop:"50px !important"}}>
                <div class="container-fluid">
                    <Header/>
                    <div className="row">
                        <Widget xl={6} md={6} mb={4}  icon={'fas fa-heart'} label={'primary'}  value={2550} title={'NewConfirmed'} />
                        <Widget xl={6} md={6} mb={4}  icon={'fas fa-check-circle'} label={'success'}  value={3400} title={'TotalConfirmed'} />
                    </div>
                    <div className="row">
                        <AreaChart xl={6} lg={5} />
                        <PieChart xl={6} lg={5} />
                    </div>
                    <div className="row">
                        <CountriesCasesTable xl={12} lg={5} />
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default App;