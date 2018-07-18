import React,{ Component } from "react";

export class Content extends Component {
    
    constructor(){
        super();
        this.state ={
            customerName:"ALWF",
            customerAge: 22,
            customer: {customerName:'a',Age:9}
        }
        
    }

    clickHandler = () => {
        this.setState({customer:{...this.state.customer,customerName:'b'}})
    }

    render(){
        let a = "Some Value";
        return (
            <React.Fragment>
                <div>
                    <h2>From Content {this.state.customer.customerName} ({this.state.customer.Age}) </h2> 
                    <input type="button" value="Click Me" onClick={this.clickHandler} />
                </div>
            </React.Fragment>
        );
    }
}


