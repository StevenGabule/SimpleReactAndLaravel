import React, {Component} from 'react';

export default class ErrorAlert extends Component {
    render() {
        return (
            <div className='alert alert-danger' role='alert'>
                Failed operation, Please try again!
            </div>
        );
    }
}

