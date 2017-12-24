import React, {Component} from "react";
import PostCreator from '../PostCreator';
import Style from './styles';
import Post from "../Post";
import Spinner from "../Spinner"
import Postman from "../Postman";
import PostCounter from "../PostCounter";



export default class Feed extends Component {
    render () {
        return (
            <section className={Style.feed}>
                <PostCreator/>
                <PostCounter/>
                <Post/>
                <Postman/>
                <Spinner/>
            </section>

        );
    }
}