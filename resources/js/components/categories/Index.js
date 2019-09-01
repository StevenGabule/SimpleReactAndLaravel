import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Listing from "./Listing";
import Add from "./Add";
import Edit from "./Edit";

export default class Index extends Component {
    render() {
        return (
            <div className='mb-3 mt-3'>
                <Link to='/category' className='btn btn-primary'>Listing</Link> {' '}
                <Link to='/category/Add' className='btn btn-info text-white'>Add</Link>
                <Route exact path='/category' component={Listing}/>
                <Route exact path='/category/add' component={Add}/>
                <Route exact path='/category/edit/:id' component={Edit}/>
            </div>
        );
    }
}
