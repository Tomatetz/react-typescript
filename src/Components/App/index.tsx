import * as React from "react";

import './style.scss'
import Data from '../../models/Data'
import details = require('../../../data');
import {Switch, Route} from 'react-router-dom'

import Main from '../Main/'
import Contacts from '../Contacts/'
import Search from '../Search/'
import Menu from '../Menu/'

export default class App extends React.Component < {}, {data: Data[]} > {

    constructor(props : {}) {
        super(props);
        this.state = { data: [] };
    }
    componentDidMount() {
        let data : Data[] = details;
        this.setState({ data: data });
    }
    render() {
        const MainPage = () => <Main data={ this.state.data }/>;
        const ContactsPage = () => <Contacts data={ this.state.data }/>;
        const SearchPage = () => <Search data={ this.state.data }/>;
        return (
            <div className="main-container">
                <Menu/>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/contacts' component={ContactsPage}/>
                    <Route path='/search' component={SearchPage}/>
                    <Route path='*' component={MainPage}/>
                </Switch>
            </div>
        );
    }
}