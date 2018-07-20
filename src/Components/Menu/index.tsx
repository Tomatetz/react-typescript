import * as React from "react";
import {Link} from 'react-router-dom'

import './style.scss'

export default class MainComponent extends React.Component < {}, {
    current: string,
    nav: string[]
} > {

    constructor(props : {}) {
        super(props);

        this.state = {
            current: 'home',
            nav: ['home', 'contacts', 'search', 'help']
        }
    }
    toggleActive = (val) => {
        this.setState({ current: val });
    }
    render() {
        return (
            <div className="menu-wrapper">
                <ul>
                    {this
                        .state
                        .nav
                        .map((x) => 
                        <Link to={"/" + x} onClick={this.toggleActive.bind(this, x)} key={x} >
                            <li onClick={this.toggleActive.bind(this, x)}
                                className={"navigation__li" + (this.state.current === x ? ' active' : '')}>{x} </li>
                        </Link>)}
                </ul>
            </div>
        );
    }
}