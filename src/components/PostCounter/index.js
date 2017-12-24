import React, {Component} from 'react';

import avatar from '../../theme/assets/lisa.png';

import Styles from './styles';

export default class PostCounter extends Component {
    render () {
        return (
            <section className = { Styles.postCounter }>{"Post count: 0"}</section>
        );
    }
}