import * as React from "react";

import Data from '../../models/Data'

import './style.scss'

export default class Contacts extends React.Component < {
    data : Data[]
}, { data: Data[]} > {

    constructor(props : {
        data: Data[]
    }) {
        super(props);
        this.state = { data: [] }
    }
    componentDidMount() {

        let data : Data[] = this.props.data.slice();
        this.setState({ data: data });
    }
    handleInputChange = (e) => {
        var inputValue = e.target.value.toLowerCase();
        // Search input value in first and last name of customer
        let data : Data[] = this
            .props
            .data
            .slice()
            .filter(item => {
                return (item.name.first.toLowerCase().indexOf(inputValue) !== -1 || item.name.last.toLowerCase().indexOf(inputValue) !== -1);
            });
        this.setState({data: data});
    }
    render() {
        return (
            <div className="search-wrapper">
                <input placeholder="Search..." onChange={this.handleInputChange} autoFocus/>
                <ul className="users-container">
                    {this
                        .state
                        .data
                        .map((item) => {
                            return (
                                <li key={item._id}><span className="name">{item.name.last} {item.name.first}</span>
                                    <span className="phone">
                                        <a href={"tel:" + item.phone}>{item.phone}</a>
                                    </span>
                                    <a className="email" href={"mailto:" + item.email}>{item.email}</a>
                                </li>
                            )
                        })}
                </ul>
            </div>
        );
    }
}