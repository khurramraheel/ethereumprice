import React, { Component } from 'react'
import {connect} from "react-redux"
import Axios from 'axios';
class Status extends Component {
    constructor(props){
        super(props);
        this.state = {
            capital:[]
        }
        Axios.get('/showCQ')
            .then(res => {
                this.setState({
                    capital: res.data.capital
                })
                //   console.log(res.data)
            })
    }
    componentWillMount(){
        // console.log('component will mount')
        
    }
    componentDidUpdate(){
        // console.log('componentDidUpdate')
    }
    componentDidMount(){
       
         console.log(this.state.capital)
    }
  render() {
        {
          let capitalTotal =  this.state.capital.map(capital => {
                let capitalCnt = +capital.capital
                // let totalCapital = capital.quantity*capital.price
                capitalCnt += capitalCnt
               
                return (capitalCnt)
            })
             console.log(capitalTotal)
        }
     console.log(this.state.capital)
    return (
         
       <div>
         
            <div class="card text-center align-items-center " >
                
                <div class="card-body col-md-6 " 
                style={{backgroundColor:'black !important'}}>    
                    <div class="input-group mb-3" >
                        <div class="input-group-prepend">
                            <span class="input-group-text" 
                            id="inputGroup-sizing-default">Capital</span>
                        </div>
                        <input  type="text" 
                            disabled
                            className="form-control p-4 text-white border-0"
                            aria-label="Sizing example input" 
                            style={{ background: "#23272B", color: "white" }}
                            aria-describedby="inputGroup-sizing-default"/>
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <span class="input-group-text" 
                            id="inputGroup-sizing-default">Quantity</span>
                        </div>
                        <input  
                            type="text" 
                            disabled
                            className="form-control p-4 text-white border-0"
                            aria-label="Sizing example input" 
                            style={{ background: "#23272B", color: "white" }}
                            aria-describedby="inputGroup-sizing-default"/>
                    </div>
                </div>
                <div class="card-footer text-muted">
                    <button type="submit"
                    className="input-grouptext btn btn-dark px-5 border-0"
                    style={
                      { backgrund: "", color: "white",
                        fontWeight: "600",textAlign:'right' }
                    }
                    >
                        SUBMIT
                    </button>
                </div> 
            </div>
        </div>
    )
  }
}

export default Status
