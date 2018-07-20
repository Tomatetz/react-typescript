import * as React from "react";

import Data from '../../models/Data'
import Map from '../Map/'

import details = require('../../../data');

import './style.scss'

export default class MainComponent extends React.Component < {
    data : Data[]
}, {
    data: Data[],
    total: number,
    avAge: number,
    stDev: number,
    markers: {
        lat: number,
        lng: number
    }[]
} > {

    constructor(props : {
        data: Data[]
    }) {
        super(props);
        this.state = {
            data: [],
            total: 0,
            avAge: 0,
            stDev: 0,
            markers: []
        };
    }
    componentDidMount() {
        let data : Data[] = this.props.data.slice();
        this.calculateStatistic(data);
    }
    calculateStatistic = (data) => {
        let totalAge : number = 0;
        let markers = [];
        let totalAmount : number = 0;
        let sqDif : number = 0;
        let stDev : number = 0;

        // Set data for google maps markers, average age and total amount for standart deviation
        data.forEach((customer) => {
            markers.push({
                lat: + customer.latitude,
                lng: + customer.longitude
            })
            totalAge += customer.age;
            totalAmount += + customer.balance.replace(/[\$,]/g, '');
        });

        data.forEach((customer) => {
            // Sum of Differences2
            sqDif += Math.pow(+ customer.balance.replace(/[\$,]/g, '') - totalAmount / data.length, 2);
        });
        stDev = Math.sqrt(sqDif / (data.length - 1));

        this.setState({
            data: data,
            avAge: Math.floor(totalAge / data.length),
            markers: markers,
            stDev: stDev
        });
    }
    render() {
        return (
            <div className="main-wrapper">
                <div className="info-container">
                    <div className="info">Total:
                        <span className="value total">{this.state.data.length}</span>
                    </div>
                    <div className="info">Average age:
                        <span className="value av-age">{this.state.avAge}</span>
                    </div>
                    <div className="info">Standart deviation:
                        <span className="value st-dev">{this.state.stDev}</span>
                    </div>
                </div>
                <Map isMarkerShown markers={this.state.markers}/>
            </div>
        );
    }
}