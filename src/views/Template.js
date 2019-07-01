import React, { Component } from 'react';
import ChartWithZoom from './overview/Chart with Zoom';
import Blog from './overview/blog';
import Hcards from './overview/hcards'
import Cards from './overview/cards';
import Table from './overview/table';
import Footer from './overview/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import {Router, Route} from 'react-router';
//  import FaIconPack from 'react-icons/lib/fa';
//  import bell from 'react-icons/lib/fa/bell-o';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	Link,
	NavLink,
  BrowserRouter
} from "react-router-dom";
// import ChartWithZoom from "./overview/Chart with Zoom";
class Template extends Component {
  render() {    
    return (
		<div className="bg-dar" style={{boxSizing:'border-box' ,background: 'linear-gradient(to bottom, #181c2d, #1a1f32, #1d2236, #1f263b, #212940)'}}>
			<nav className="navbar navbar-expand-sm fixed-top navbar-da" style={{backgroundColor:'#181c2d'}}>
					<div className="container">
						<h4><a href="#" className="text-light nav-link " style={{fontWeight:'700'}}>ethereumprice</a></h4>
						<button className="navbar-toggler float-right" style={{color:'red'}} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon text-white btn btn-primary bg-white"></span>
  </button>
						<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mx-auto">
							<li className="nav-item">	<a href="#" className="nav-link text-white">1hr</a></li>
								<li className="nav-item"><a href="#" className="nav-link text-white">12hr</a></li>
								<li className="nav-item"><a href="#" className="nav-link text-white">24hr</a></li>
								<li className="nav-item"><a href="#" className="nav-link text-white">1w</a></li>
								<li className="nav-item"><a href="#" className="nav-link text-white">1m</a></li>
								<li className="nav-item"><a href="#" className="nav-link text-white">3m</a></li>
								<li className="nav-item"><a href="#" className="nav-link text-white">1y</a></li>
								<li className="nav-item"><a href="#" className="nav-link text-white">All</a></li>
</ul>
				<ul className="navbar-nav ml-auto d-inline">
						<li className="nav-item d-inline"><button className="btn btn-dark">LIVE</button></li>
						<li className="nav-item d-inline"></li>
						<li className="nav-item d-inline"><button className="btn btn-primary ml-2">BUY ETHEREUM</button></li>
				</ul>
						</div>
						</div>
			</nav>		  
			<div className="container  pt-3 mt-5">
			<nav className="navbar navbar-expand-sm px-0">
					<div className="container p-0">
						<ul className="navbar-nav ml-auto d-inline">
							<li className="nav-item dropdown d-inline">
							<button className="btn btn-outline-dark text-white dropdown-toggle" data-toggle="dropdown">ETH/AUD</button>
							<div className="dropdown-menu bg-dark text-white">
									<a className="dropdown-item">ETH/BTC</a>
									<a className="dropdown-item">ETH/BTC</a>
									<a className="dropdown-item">ETH/JPY</a>
									<a className="dropdown-item">ETH/SEK</a>
									<a className="dropdown-item">ETH/USD</a>
									<a className="dropdown-item">ETH/CAD</a>
									<a className="dropdown-item">ETH/EUR</a>
									<a className="dropdown-item">ETH/GBP</a>
							</div>
							</li>
							<li className="nav-item dropdown pl-2 d-inline">
							<button className="btn btn-outline-dark text-white dropdown-toggle" data-toggle="dropdown">Market Avg.</button>
							<div className="dropdown-menu bg-dark text-white">
									<a className="dropdown-item">Market Avg.</a>
							</div>
							</li>
						</ul>
					</div>
			</nav>

			{/* <div className="container"> */}
				<div className="row">
					<div className="mx-auto">
						<h1 className="text-white p-0" style={{fontSize:80, fontWeight:700, letterSpacing:-4}}>$256.13%</h1>
						<h1 className="text-white p-0" style={{textAlign:"center", fontWeight:'400'}}>132.3%</h1>
					</div>
				</div>
				</div>

				<div className="container pt-5">
					<div className="row">
						<div className="col-md-3 col-sm-6 col-6">
						<h1 className="text-white p-0" >$256.13%</h1>
						<a className=" p-0" style={{color:'#828dab'}}>24 HOUR CHANGE</a>
						</div>
						<div className="col-md-3 col-sm-6 col-6">
						<h1 className="text-white p-0" >$256.13%</h1>
						<a className=" p-0" style={{color:'#828dab'}}>24 HOUR HIGH</a>
						</div>
						<div className="col-md-3 col-sm-6 col-6">
						<h1 className="text-white p-0" >$256.13%</h1>
						<a className=" p-0" style={{color:'#828dab'}}>24 HOUR LOW</a>
						</div>
						<div className="col-md-3 col-sm-6 col-6">
						<h1 className="text-white p-0" >$256.13%</h1>
						<a className=" p-0" style={{color:'#828dab'}}>MARKET CAP</a>
						</div>
					</div>
				</div>

					<div className="container pt-5 my-5">
					<ChartWithZoom/>
					</div>
					<div className="container">
					<p className="text-white text-center">Ethereum Price Chart - US Dollar (USD)</p>
					<p className=" text-center" style={{fontSize:'8', fontWeight:'100', lineHeight:'0', color:'#9ca3bc'}}>The price of Ethereum (ETH/USD) today is $295.24 USD with a total market cap of $31,506,077,206.</p>
					</div>
					{/**Cards */}
						<div className="my-5">
							<Cards/>
						 </div>
									{/**tables */}
								<div className=" pb-5">
									<Table/>
								 </div>

									{/**Blog */}
									<div className="container">
									<Blog/>
									</div>

									<Hcards/>

									<div className="container">
										<div className="row">
											<div className="col-md-2 offset-5">
												<button className="w-100 btn btn-primary my-3">PREVIOUS UPDATES</button>
											</div>
										</div>
									</div>

									<div className="container-fluid" style={{background:'#2b344f'}}>
											<div className="py-5 text-center text-white">
												<h4>Subscribe to EthereumPrice.org</h4>
												<h6>Receive email updates when new content is published</h6>
												<form className="mx-auto py-4 border-0 text-white" style={{maxWidth:'445px'}}>
												<div className="input-group mb-3">
													<input type="text" className="form-control p-4 text-white border-0" placeholder="Your Email" style={{background:'#39425b', color:'white'
}}/>
													<div className="input-group-append">
													<button className="input-group-text px-5 border-0" style={{background:'#4d5878', color:'white', fontWeight:'600'}}>SUBMIT</button>
													</div>
												</div>
												</form>
											</div>
									</div>

									{/**Footer */}
									<Footer/>
			</div>
    );
  }
}

export default Template;