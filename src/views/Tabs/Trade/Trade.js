import React, { Component } from 'react'
import axios from 'axios'
import './style.css'
class Trade extends Component {
    
    constructor(props)
    {
        super(props);
        this.state={
            oder_digit:"",
            eth_price:""
        }
    }   
    chageHandler = ()=>{
        this.check();
    }
    check = ()=>{
            var buy2_etherum = document.getElementById('buy_etherum').value;
            console.log(buy2_etherum);
            var etherum = document.getElementById('etherumprice').value;
            console.log(etherum);
            var c_balance = document.getElementById('currentbalance').value;
            console.log(c_balance);
            var checkamount = buy2_etherum * etherum;
            console.log(checkamount);
            if(checkamount<c_balance)
            {
                console.log("You can buy Etherum")
            }
            else{
                console.log("Your current balance have not enough")
            }
        
    }
    componentDidMount(){
        this.setState({
            eth_price: this.refs.eth_price.value,
            c_balance: this.refs.c_balance.value,
        })
    }


	chageHandler = ()=>{
        this.check();
    }
     check = ()=>{
            var buy2_etherum = document.getElementById('buy_etherum').value;
            console.log(buy2_etherum);
            var etherum = document.getElementById('etherumprice').value;
            console.log(etherum);
            var c_balance = document.getElementById('currentbalance').value;
            console.log(c_balance);
            var checkamount = buy2_etherum * etherum;
            console.log(checkamount);
            if(checkamount<c_balance)
            {
                console.log("You can buy Etherum")
            }
            else{
                console.log("Your current balance have not enough")
            }
    }
    // state = {
    //     c_balance: this.refs.c_balance.value
    // } 
        

    chageHandler = (e)=>{
        var name = e.target.name;
        var total_value = e.target.value;
        const config = {
            headers:{
                "Content-Type": "application/json"
            }
        }
        let {eth_price,c_balance} = this.state
        const body = JSON.stringify({
            eth_price, c_balance
        })
        axios.post('/trade',body,config)
        .then(res => {
            return res
        }).then(res => {
            if(res.data.success){
                console.log("sucess")
            }
        })
        .catch(err => console.log(err))
        // console.log(this.state.c_balance)
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
                        < input type = "text"
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
                </div>
                <div class="card-footer text-muted">
                   
                        <button
                        disabled
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

export default Trade
