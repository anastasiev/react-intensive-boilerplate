import React, {Component} from "react";
import PostCreator from '../PostCreator';
import Style from './styles';
import like from '../../theme/assets/like.png';




export default class Like extends Component {
    render () {
        return (
            <section className={Style.like}>
                <span className={Style.thumbUp}>{"Like"}</span>
                <div>
                    <span>{"0"}</span>
                </div>
            </section>

        );
    }
}