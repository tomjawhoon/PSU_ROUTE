import React, { Component } from 'react';
import Layout from './Layout';
import App from './App/App.js';
export default class Home extends Component {
    constructor(props) {
        super(props);
    }
    render () {
        return (
        <div>
            <App/>
            <Layout/>
        </div>
        );
    }
}
