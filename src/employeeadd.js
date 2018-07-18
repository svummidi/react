import React, { Component } from 'react';

export default class EmployeeList extends Component {

    constructor() {
        super();
        this.state = { FName: '' }
    }

    save = () => {

    }

    setFname = (event) => {
        this.setState({ FName: event.target.value });
    }

    setLname = (event) => {
        this.setState({LName: event.target.value});
    }

    setAge = (event) => {
        this.setState({Age: event.target.value});
    }

    render() {
        return (

            <div class="container">
                <h1>Employee Add</h1>
                <div class="form-group row">
                    <label  className="col-form-label col-sm-2">First Name</label>
                    <div className="col-sm-10">
                        <input type="text" value={this.state.FName} onChange={this.setFname} className="form-control form-control-m" />
                    </div>
                </div>
                <div class="form-group row">
                    <label className="col-form-label col-sm-2">Last Name</label>
                    <div className="col-sm-10">
                        <input type="text" value={this.state.LName} onChange={this.setLname} className="form-control form-control-m" />
                    </div>
                </div>
                <div class="form-group row">
                    <label className="col-form-label col-sm-2">Age</label>
                    <div className="col-sm-10">
                        <input type="text" value={this.state.Age} onChange={this.setAge} className="form-control form-control-m" />
                    </div>
                </div>
                <input type="button" value="Add" className="btn btn-primary"/>&nbsp;&nbsp;
                <input type="button" value="Cancel" class="btn btn-secondary" onClick={this.props.onCancel}/>

            </div>


        )
    }
}