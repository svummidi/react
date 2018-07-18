import React from 'react';

function getEmployees(props){
    let empllist = props.employees;
    return empllist.map(x => {
        return (
            <tr key={x.FName}>
                <td >{x.FName}</td>
                <td >{x.LName}</td>
                <td>{x.Age}</td>
            </tr>
        )
    })
}

const EmployeeList = (props) =>{
    return (           
            <div className="container">
            <h1>Employee List</h1>
            <table className="table">
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {getEmployees(props)}
                </tbody>
            </table>
            <input type="button" className="btn btn-default" value="Add New Employee" onClick={props.onAddNew}/>
            </div>
    )
}

export default EmployeeList;
