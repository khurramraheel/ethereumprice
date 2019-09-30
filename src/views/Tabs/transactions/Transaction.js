import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

 class Transaction extends Component {
     
    constructor(props){
        super(props);
        this.state = {
            tradeDetail: []
        }
        // 
        fetch('/showTrade', {
            method:"GET"
        }).then((res)=>{
            return res.json();
        }).then((res)=>{
            this.setState({tradeDetail:res.users})
            // console.log(res);
        })
        // axios.get('/showTrade').then(res => res.json())
        // .then(res => {
        //     console.log(res)
        // })

    }
    componentDidMount(){
        // axios.post('/')
    }
    render() {
        // console.log(this.state)
       return(
            <div>
                <table className="table text-white">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Date</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                         this.state.tradeDetail.map(trade => {
                        let {username} = trade
                        // console.log(username)
                        return ( 
                        <tr>
                            <th scope="row">1</th>
                            <td>12/03/2019</td>
                            <td>{username}</td>
                            <td>$150</td>
                            <td>2500</td>
                        </tr>
                        )
                            })
                         }
                    </tbody>
                </table>
            </div>
       )
    }
}
export default connect()(Transaction)