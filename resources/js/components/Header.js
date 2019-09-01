import React, {Component} from 'react';
import {Link, Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Categories from './categories/Index';

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">Features</Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/category' className='nav-link'>Categories</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-md-12">
                        <Route exact path='/' component={Home}/>
                        <Route exact path='/about' component={About}/>
                        <Route exact path='/category' component={Categories}/>
                        <Route exact path='/category/add' component={Categories}/>
                        <Route exact path='/category/edit/:id' component={Categories}/>
                       </div>
                </div>
            </div>
        )
    }
}
