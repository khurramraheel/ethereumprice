import React, { Component } from 'react';



class Blog extends Component{
render() {
    return (
        <div className="container">
        <h2 className="text-white"> What is Ethereum</h2>
        <p style={{color:'black'}}>Ethereum was first conceived in 2013 by its founder, Vitalik Buterin.
             The Ethereum whitepaper described the blockchain as an evolution of Bitcoin’s,
              enabling not only payments but “smart contracts” too.</p>

              <p style={{color:'black'}}>Using Ethereum’s “Turing complete” smart contract language,
                   Solidity, developers are able to deploy a set of instructions
                    to the blockchain that operate indefinitely with a high degree
                     of finality and fraud-resistance. With the first block being
                      mined in July 2015, Ethereum has since become the largest smart
                       contract platform of its kind, and the second largest blockchain
                        of all time as measured by market capitalization.</p>
                
            <a href="#" className="" data-toggle="collapse" data-target="#blog">Read more</a>
            <div  id="blog" className="collapse">

                <p style={{color:'black'}}>The rapid price increase of Ethereum has not only attracted
                     investors but developers too. Ethereum has tens of thousands
                      of developers in its open source community, each contributing
                       to the many layers of the “Ethereum stack”. This includes code
                        contributions to the core Ethereum clients, second layer scaling
                         tech and the “decentralized applications” (dApps) that are built
                          on top of the platform. The appeal of Ethereum to developers is
                           unique in that it was the first platform to allow anyone in the
                            world to write and deploy code that would run without the risk of
                             censorship. The community of developers which have formed around
                              these core principles have led to the creation of technologies
                               that could not have existed without the inception of Ethereum,
                                many of which were never predicted. Some of the major use-cases
                                 of Ethereum so far have been:</p>

            </div>


        </div>
        );
    }
}
export default Blog;