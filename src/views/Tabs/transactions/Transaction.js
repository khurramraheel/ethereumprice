import React, { Component } from 'react'

export default class Transaction extends Component {
    render() {
        return (
            <div>
                <table class="table text-white">
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
                        <tr>
                            <th scope="row">1</th>
                            <td>12/03/2019</td>
                            <td>1000</td>
                            <td>$150</td>
                            <td>2500</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>12/03/2019</td>
                            <td>1000</td>
                            <td>$150</td>
                            <td>2500</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>12/03/2019</td>
                            <td>1000</td>
                            <td>$150</td>
                            <td>2500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}
