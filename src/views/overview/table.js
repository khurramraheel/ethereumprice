import React, { Component } from 'react';
// import img1 from './image/img1.png';
class Table extends Component{
    render(){
        return(
            <div className="container">
  <p style={{color:"white"}}>ETHEREUM PERFORMANCE USD</p>            
  <table className="table table-primary  table-striped" style={{fontSize:'12px'}}>
    <thead className="text-uppercase">
      <tr>
        <th>yEAR</th>
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

  {/* Second table */}

  <p style={{color:"white"}}>ETHEREUM PRICE % ANUAL CHANGE</p>            
  <table className="table table-primary  table-striped" style={{fontSize:'12px'}}>
    <thead className="text-uppercase">
      <tr>
      <th>YEAR</th>
        <th>USD</th>
        <th>AUD</th>
        <th>BTC</th>
        <th>CAD</th>
        <th className="d-none d-sm-none d-md-block">EUR</th>
        <th className="d-none d-sm-none d-md-block">GBP</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>2017</td>
        <td>2648.26%</td>
        <td>2648.26%</td>
        <td>2648.26%</td>
        <td>2648.26%</td>
        <td className="d-none d-sm-none d-md-block">2648.26%</td>
        <td className="d-none d-sm-none d-md-block">2648.26%</td>

      </tr>
      <tr>
        <td>2018</td>
        <td>2648.26%</td>
        <td>2648.26%</td>
        <td>2648.26%</td>
        <td>2648.26%</td>
        <td className="d-none d-sm-none d-md-block">2648.26%</td>
        <td className="d-none d-sm-none d-md-block">2648.26%</td>
      </tr>
      <tr>
        <td>2019</td>
        <td>2648.26%</td>
        <td>2648.26%</td>
        <td>2648.26%</td>
        <td>2648.26%</td>
        <td className="d-none d-sm-none d-md-block">2648.26%</td>
        <td className="d-none d-sm-none d-md-block">2648.26%</td>
      </tr>
    </tbody>
  </table>

</div>
        
        );
    }
} 
export default Table;