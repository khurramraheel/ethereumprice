import React, { Component } from 'react'
import Trade from '../Tabs/Trade/Trade'
import Profile from './Profile/Profile'
import Transaction from './Transactions/Transaction'
export default class Tabs extends Component {
    render() {
        return (
            <div>
                <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Transaction</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Trade</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Profile</a>
                    </li>
                </ul>
                <div className="tab-content p-0" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><Transaction /></div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><Trade/></div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><Profile /></div>
                </div>
            </div>
        )
    }
}
