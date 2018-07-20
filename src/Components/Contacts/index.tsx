import * as React from "react";

import Data from '../../models/Data'

import './style.scss'

export default class Contacts extends React.Component < {
    data : Data[]
}, {
    allData: Data[],
    data: Data[],
    step: number
} > {

    constructor(props : {
        data: Data[]
    }) {
        super(props);
        this.state = { allData: [], data: [], step: 0 };
    }
    componentDidMount() {
        this.goToPage(0);
        // Set allData array for pagination
        this.setState({ allData: this.props.data.slice() });
    }
    goToPage = (step : number) => {
        let data : Data[] = this.props.data.slice(0 + step * 10, 9 + step * 10);
        // Set data array of 10 customers depends on step and step for pagination
        this.setState({ data: data, step: step });
    }
    render() {
        return (
            <div className="main-wrapper">
                <ul className="users-container">
                    {this
                        .state
                        .data
                        .map((item) => {
                            return (
                                <li key={item._id}><span className="name">{item.name.last} {item.name.first}</span>
                                    <a className="phone" href={"tel:" + item.phone}>{item.phone}</a>
                                    <a className="email" href={"mailto:" + item.email}>{item.email}</a>
                                </li>
                            )
                        })}
                </ul>
                <div className="pagination-container">
                    {[...Array(Math.ceil(this.state.allData.length / 10))].map((x, i) => <span
                        className={"pagination" + (this.state.step === i ? ' active' : '')}
                        onClick={this.goToPage.bind(this, i)}
                        key={i}>{i + 1}</span>)}
                </div>
            </div>
        );
    }
}