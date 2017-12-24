import React, {Component} from 'react';

import Styles from './styles';
import {string} from "prop-types"

export default class Postman extends Component {
    static contextTypes = {
        avatar: string.isRequired,
        firstName: string.isRequired,
    };
    render () {
        const {avatar, firstName} = this.context;
        return (
            <section className = { Styles.postman }>
                <img src={avatar}/>
                <span>{`Welcome online, ${firstName}`}</span>
            </section>
        );
    }
}