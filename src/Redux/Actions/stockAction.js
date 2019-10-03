import axios from "axios";
//import {getTradeData} from "../../views/Tabs/Transactions/Transaction"
 export const stockSend = ({ price,quantity,capital }) => dispatch => {
  
    const config = {
        headers: {
            "Content-Type":"application/json"
        }
    }
    const body = JSON.stringify({ price,quantity,capital })

    axios.post('/stockissue', body, config)
            .then(res => dispatch({
                
                 type:"CAPITAL_DATA",
                 payload:res.data.capital
             }))
             .catch(err => console.log(err))
        //  console.log(this.state.c_balance)
  } 
