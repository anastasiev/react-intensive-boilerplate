// Core
import React, { Component } from 'react';

import avatar from '../../theme/assets/lisa.png';

import {string, shape} from "prop-types"



const options = {
    avatar,
    firstName: "Lisa",
    lastName: "Simpson"
};

import Feed from "../../components/Feed";

export default class App extends Component {
    static childContextTypes = {
        avatar: string,
        firstName: string,
        lastName: string
    }
    getChildContext(){
        return options;
    }

    render () {
        return (
                <Feed/>
        );
    }
}
