import React, {Component} from 'react';
class Footer extends Component{
    render(){
        return(
            <div className="container-fluid" style={{background:'#2b7478'}}>
                <div className="container py-5">
                    <div className="row">
                    <h5 className="text-white px-0">ETHEREUMPRICE.ORG</h5>
                    </div>
                    <div className="row"> 
                        <div className="col-md-6 pl-0">
                            <p className="" style={{color:'black'}}>This website is intended to provide
                                 a clear summary of Ethereum's current
                                  and historical price as well as important
                                   updates from the industry. I've also included
                                    a number of ERC20 tokens which can be found in
                                     the tokens tab at the top right. Prices are updated
                                      every minute in real-time and the open/close prices
                                       are recorded at midnight UTC. Bookmark us!</p>
                        </div>

                        <div className="col-md-6" style={{color:'black'}}>
                            <p >
                            Please note, weighted average exchange prices update very
                             slowly for some ETH and token pairs. <b>Disclaimer:</b> 
                             content on this website should not be used when making
                              investment decisions. Investors should seek professional financial advice.
                            </p>
                            <p><b>World Ethereum Prices</b></p>
                            <ul className="d-inline-block" style={{fontSize:'14px'}}>
                                <li><a href="#">Ethereum Price AUD</a></li>
                                <li><a href="#">Ethereum Price BTC</a></li>
                                <li><a href="#">Ethereum Price CAD</a></li>
                                <li><a href="#">Ethereum Price EUR</a></li>
                            </ul>
                            <ul className="d-inline-block"  style={{fontSize:'14px'}}>
                                <li><a href="#">Ethereum Price GBP</a></li>
                                <li><a href="#">Ethereum Price INR</a></li>
                                <li><a href="#">Ethereum Price JPY</a></li>
                                <li><a href="#">Ethereum Price SEK</a></li>
                            </ul>
                            <ul className="d-inline-block"  style={{fontSize:'14px'}}>
                            <li><a href="#">Ethereum Price USD</a></li>                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;