import axios from "axios";
// import {getTradeData} from "../../views/Tabs/Transactions/Transaction"
import { getTradeData } from '../../views/Tabs/transactions/Transaction'
// import {changeBalance} from '../../views/Tabs/Trade/Trade'
import { getUserData } from '../../views/Tabs/Users/usersTab/usersTab'
export const tradeing = (body) => dispatch => {

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    // const body = { eth_price, c_balance, checkAmount,Trad_date,eth_quantity,userID }
    console.log(body);

    axios.post('/trade', body, config)
        .then(res => {
            getTradeData()
            //  console.log('checkkk,',res.data.trade)
            return res
        }).then(res => dispatch({

            type: "YOU_BUY_ETHEREUM",
            payload: res.data.trade
        })).then(res => {
            console.log('checkkk,', res)
            getUserData()
        })
        .catch(err => console.log(err))
    //  console.log(this.state.c_balance)
} 
