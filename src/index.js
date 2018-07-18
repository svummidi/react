import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Header } from './header';
import Employee from './employee';

const Customer = () => {
    return (<h1>Customer</h1>);
}

const Supplier = () => {
    return (<h1>Supplier</h1>)
}
class App extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                <Header></Header>
                    <Route path="/employee" component={Employee} />
                    <Route path="/customer" component={Customer} />
                    <Route path="/supplier" component={Supplier} />
                </React.Fragment>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));