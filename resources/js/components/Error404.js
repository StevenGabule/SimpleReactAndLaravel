import React, {Component} from 'react';
import {Link} from "react-router-dom";

export default class Error404 extends Component {
    render() {
        return (
            <div className={'alert alert-danger'}>
                <h3>404 Page Not Found.</h3>
                <Link className={"alert-link"} to={"/"}>Back to home</Link>
            </div>
        )
    }
}
