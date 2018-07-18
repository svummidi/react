import React,{Component} from 'react';
import EmployeeList from './employeelist';
import EmployeeAdd from './employeeadd';

export default class Employee extends Component {
    constructor(){
        super();
        this.employees = [{FName: 'A', LName: 'B', Age:1},
                    {FName: 'AA', LName: 'B', Age:1},
                    {FName: 'AAA', LName: 'B', Age:1}
                ];
        this.state = {
            isAddVisible: false
        }
    }

    onAddNew = ()=>{
        this.setState({isAddVisible: true});
    }

    onCancel= () =>{
        this.setState({isAddVisible: false});
    }

    onAdd = () => {
        alert("Employee Added Data verification is in process. Please check tomorrow...");
        this.setState({isAddVisible: false});
    }
    
    render(){
        const isLoggedIn = this.state.isAddVisible;
        let component = <EmployeeList employees={this.employees} onAddNew={this.onAddNew}/>
        if(isLoggedIn) {
            component = <EmployeeAdd onCancel={this.onCancel} onAdd={this.onAdd}/>
        }
        return(
            <div>
            {component}
            </div>
        );
    }
}