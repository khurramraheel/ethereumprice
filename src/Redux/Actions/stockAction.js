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
                
                 type:"CAPITAL DATA",
                 payload:res.data.trade
             }))
             .catch(err => console.log(err))
        //  console.log(this.state.c_balance)
  } 
