import React,{ Component } from "react";
import { Link } from 'react-router-dom';

export class Header extends Component {
    render(){
        
        return (
            <header>
                <Link to="/employee">Employee</Link>&nbsp;|&nbsp;
                <Link to="/customer">Customer</Link>&nbsp;|&nbsp;
                <Link to="/supplier">Supplier</Link>
            </header>
        );
    }
}


