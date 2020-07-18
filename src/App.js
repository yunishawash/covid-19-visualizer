import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import asyncComponent from './components/core/AsyncComponent';
//components
import Header from './components/Header';
import Footer from './components/Footer';
// async component
const AreaChart = asyncComponent(() => import('./components/AreaChart'));
const SummaryWidgets = asyncComponent(() => import('./components/SummaryWidgets'));
const CountriesCasesTable = asyncComponent(() => import('./components/CountriesCasesTable'));

const App = () => {
    return (
        <React.Fragment>
            <BrowserRouter>
                <div id="content" style={{marginTop:"50px !important"}}>
                    <div class="container-fluid">
                            <div>
                                <Header/>
                                <Route path="/" exact component={AreaChart} />
                                <Route path="/summary" exact component={SummaryWidgets} />
                                <Route path="/countries-table" exact component={CountriesCasesTable} />
                            </div>
                    </div>
                </div>
                <Footer/>
            </BrowserRouter>
        </React.Fragment>
    );
}

export default App;