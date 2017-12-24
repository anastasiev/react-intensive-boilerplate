import React, {Component} from 'react';

import Styles from './styles';

import moment from "moment/moment";
import Like from "../Like";
import {string} from "prop-types"

export default class Post extends Component {
    static contextTypes = {
        avatar: string.isRequired,
        firstName: string.isRequired,
        lastName: string.isRequired
    };
    render () {
        const {avatar, firstName, lastName} = this.context;
        return (
                <section className = { Styles.post }>
                    <span className={ Styles.postCross }></span>
                    <img src={avatar}/>
                    <a className={`${Styles.userName} ${Styles.userInfo}`}>{`${firstName} ${lastName}`}</a>
                    <time className={Styles.userInfo}>{moment().format('MMMM D h:mm:ss a')}</time>
                    <p className={Styles.postMessage}>{`Hi, I am ${firstName}. How are you?`}</p>
                    <Like/>
                </section>
        );
    }
}