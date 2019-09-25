import React, { Component } from 'react'
import { connect } from "react-redux";
import axios from 'axios'
import './style.css'
class Trade extends Component {
    
    constructor(props)
    {
        super(props);
        this.state={
            oder_digit:"",
            eth_price:"",
            checkAmount: null,
            // username:""
        }
        
    }   
    // chageHandler = ()=>{
    //     this.check();
    // }
    // check = ()=>{
    //         var buy2_etherum = document.getElementById('buy_etherum').value;
    //         console.log(buy2_etherum);
    //         var etherum = document.getElementById('etherumprice').value;
    //         console.log(etherum);
    //         var c_balance = document.getElementById('currentbalance').value;
    //         console.log(c_balance);
    //         var checkamount = buy2_etherum * etherum;
    //         console.log(checkamount);
    //         if(checkamount<c_balance)
    //         {
    //             console.log("You can buy Etherum")
    //         }
    //         else{
    //             console.log("Your current balance have not enough")
    //         }
        
    // }
    componentDidMount(){
            this.refs.subAmount.disabled = true
        this.setState({
            eth_price: this.refs.eth_price.value,
            c_balance: this.refs.c_balance.value,
            result: ""
        })
        
    }


	
    // state = {
    //     c_balance: this.refs.c_balance.value
    // } 
        

    chageHandler = (e)=>{
        var name = e.target.name;
        var input_value = e.target.value;
        if(input_value){
           
        let {eth_price,c_balance} = this.state
        let checkAmount = eth_price * input_value
        this.setState({checkAmount:checkAmount})
        if (checkAmount < c_balance)
                {
                    this.setState({result:"You can buy Etherum",textClass:"text-success"});
                    this.refs.subAmount.disabled = false 
                }
                else{
                   this.setState(
                       {result:"Your current balance have not enough",textClass:"text-danger"}
                       );
                    this.refs.subAmount.disabled = true
                }
        // console.log(checkAmount);
        
        }
        else{
            this.setState({result:"",textClass:"",checkAmount:null})
            this.refs.subAmount.disabled = true

        }
    }
    buyEthereum = dispatch => {
         const config = {
             headers: {
                 "Content-Type": "application/json"
             }
         }
        let {
            eth_price,
            c_balance,
            checkAmount,
            // c_date,
            // username
        } = this.state

         const body = JSON.stringify({
             eth_price,
             c_balance,
             checkAmount,
            //  c_date,
            //  username
         })
         axios.post('/trade', body, config)
             .then(res => {
                 return res
             }).then(res => dispatch =>({
                 type:"YOU_BUY_ETHEREUM",
                 payload:res.data
             }))
             .catch(err => console.log(err))
        //  console.log(this.state.c_balance)
    }
  render() {
    return (
        <div>
            <div class="card text-center align-items-center " >
                
                <div class="card-body col-md-6 " style={{backgroundColor:'black !important'}}>    
                    <div class="input-group mb-3" >
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Current Balance PKR</span>
                        </div>
                        <input  type="text" 
                            disabled
                            id="currentbalance"
                            className="form-control p-4 text-white border-0"
                            aria-label="Sizing example input" 
                            value="25000"
                            ref="c_balance"
                            style={{ background: "#23272B", color: "white" }}
                            aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" id="inputGroup-sizing-default">Ethereum Price PKR</span>
                        </div>
                        <input  type="text" 
                            disabled
                            id="etherumprice"
                            ref="eth_price"
                            className="form-control p-4 text-white border-0"
                            value="254"
                            aria-label="Sizing example input" 
                            style={{ background: "#23272B", color: "white" }}
                            aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text w-6" id="inputGroup-sizing-default">Buy Ethereum</span>
                        </div>
                        < input type = "number"
                        onChange = {
                            this.chageHandler
                        }
                            className="form-control p-4 text-white border-0"
                            id="buy_etherum"
                            aria-label="Sizing example input" 
                            onChange={this.chageHandler}
                            style={{ background: "#23272B", color: "white" }}
                            aria-describedby="inputGroup-sizing-default"/>
                    </div> 
                   
                    <p className={this.state.textClass ? this.state.textClass : ""} >
                        {this.state.result} 
                    </p>
                    <p className={this.state.textClass ? this.state.textClass : ""} >
                        {
                            this.state.checkAmount ? "Total Ethereum " +  this.state.checkAmount: null
                        }
                    </p>
                </div>
                <div class="card-footer text-muted">
                   
                        <button type="submit" 
                        onClick={this.buyEthereum}
                        ref="subAmount"
                        
                        className="input-grouptext btn btn-dark px-5 border-0"
                        style={{ backgrund: "", color: "white", fontWeight: "600",textAlign:'right' }}
                        >
                            SUBMIT
                        </button>
                   
                </div> 
            </div>
        </div>
    )
  }
}
 let mapStateToProps = state =>{
    return{
        // username: state.user.username
    }
}
export default connect()(Trade)
