import React, { Component } from 'react';
// import img1 from './image/img1.png';
class Table extends Component{
    render(){
        return(
            <div className="container">
  <p style={{color:"#9ca3bc"}}>ETHEREUM PERFORMANCE USD</p>            
  <table className="table table-dark  table-striped" style={{fontSize:'12px'}}>
    <thead className="text-uppercase">
      <tr>
        <th>Period</th>
        <th>Change</th>
        <th>Change%</th>
        <th>High</th>
        <th>Low</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>25</td>
		<th>Email</th><th>Email</th>
      </tr>
      <tr>
        <td>Mary</td>
        <td>Moe</td>
        <td>65</td>
		<th>Email</th>
		<th>Email</th>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>15</td>
        <th>Email</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>15</td>
        <th>Email</th>
        <th>Email</th>
      </tr>
      <tr>
        <td>July</td>
        <td>Dooley</td>
        <td>15</td>
        <th>Email</th>
        <th>Email</th>
      </tr>
    </tbody>
  </table>
</div>
        
        );
    }
} 
export default Table;