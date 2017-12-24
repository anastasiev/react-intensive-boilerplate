import React, {Component} from 'react';

import {string} from "prop-types"

import Styles from './styles';

export default class PostCreator extends Component {
    static contextTypes = {
        avatar: string.isRequired,
        firstName: string.isRequired,
    };
    render () {
        const {avatar, firstName} = this.context;
        return (
                <section className = { Styles.postCreator }>
                    <img src={avatar}/>
                    <form>
                        <textarea placeholder={`What's on your mind, ${firstName}?`}></textarea>
                        <input type="submit" value="Post"/>
                    </form>

                </section>
        );
    }
}