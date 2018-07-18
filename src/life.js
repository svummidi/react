import React, { Component } from 'react';

export default class Life extends Component {

    constructor(){
        super();
        this.state = {message: "Welcome"};
    }

    componentDidMount(){
        console.log("Componenet Mounted");
    }

    componentWillMount(){
        console.log("Component Will Mount");
    }

    componentWillUpdate(){
        console.log("Component Will Update");
    }

    render(){
        return (<h3>React is Life {this.state.message}</h3>)
    }
   
}