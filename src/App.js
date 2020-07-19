import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import asyncComponent from './components/core/AsyncComponent';
//components
import Header from './components/Header';
import Footer from './components/Footer';
// redix store
const store = createStore(reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// async component
const AreaChart = asyncComponent(() => import('./components/AreaChart'));
const SummaryWidgets = asyncComponent(() => import('./components/SummaryWidgets'));
const CountriesCasesTable = asyncComponent(() => import('./components/CountriesCasesTable'));
// App
const App = () => {
    return (
        <React.Fragment>
            <Provider store={store} >
                <BrowserRouter>
                    <div id="content" style={{marginTop:"50px !important", padding:"0px 250px"}}>
                        <div className="container-fluid">
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
            </Provider>
        </React.Fragment>
    );
}

export default App;