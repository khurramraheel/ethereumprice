import React, { Component } from 'react'
import { connect } from "react-redux";
import {stockSend} from '../../../../Redux/Actions/stockAction'
class Issue extends Component {
  constructor(props){
    super(props);
    this.state={
      price:'',
      quantity:'',
      capital:''
    }
   
  }
  componentDidMount(){
    this.refs.subIssue.disabled = true
  }
  
  changehandler = (e)=>{
    var issuepricee = this.refs.issue_price.value;
    var quantity = this.refs.quantity.value;
    if (issuepricee!=="" && quantity!== "") 
    {
      let capital = issuepricee * quantity
      console.log("after multiply capital = ", capital)
      this.setState({
        price:issuepricee,
        quantity:quantity,
        capital:capital

      })
      this.refs.subIssue.disabled = false
    } 
    else 
    {
     this.refs.subIssue.disabled=true;
    }
    
    
  }
  
  submitHandler= ()=>{
    console.log("state = ",this.state)
    var stockData= this.state;
    console.log("stockData to be send to action = ",stockData)
    this.props.stockSend(stockData)
  }
  render() {
  
    return (
      
          <div>
            <div>
              <div class="card text-center align-items-center " >
                <div class="card-body col-md-6 " style={{backgroundColor:'black !important'}}>    
                    <div class="input-group mb-3" >
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Price</span>
                        </div>
                        <input  type="text" 
                            id="Price"
                            name="price"
                            onChange={this.changehandler}
                            className="form-control p-4 text-white border-0"
                            aria-label="Sizing example input" 
                            ref="issue_price"
                            style={{ background: "#23272B", color: "white" }}
                            aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Qty</span>
                        </div>
                        <input  type="text" 
                            id="Quantity"
                            ref="quantity"
                            name="quantity"
                            onChange={this.changehandler}
                            className="form-control p-4 text-white border-0"
                            aria-label="Sizing example input" 
                            style={{ background: "#23272B", color: "white" }}
                            aria-describedby="inputGroup-sizing-default"/>
                    </div>
                </div>
                <div class="card-footer text-muted">
                        <button type="submit" 
                        onClick={this.submitHandler}
                        ref="subIssue"
                        className="input-grouptext btn btn-dark px-5 border-0"
                        style={{ backgrund: "", color: "white", fontWeight: "600",textAlign:'right' }}
                        >
                           Issue
                        </button>
                </div> 
              </div>
            </div>
          </div>
    )
  }
}
export default connect(null,{stockSend})(Issue)
