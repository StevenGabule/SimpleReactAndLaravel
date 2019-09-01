import React, {Component} from 'react';

export default class Add extends Component {
    constructor() {
        super();
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            category_name: ''
        }
    }

    onChangeCategoryName(e) {
        this.setState({
            category_name: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const category = {
            category_name: this.state.category_name
        };
        axios.post('http://127.0.0.1:8000/api/category/store', category).then(res => Console.log(res.data));

    }

    render() {


        return (
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label htmlFor="category_name">Category name</label>
                    <input type="text" onChange={this.onChangeCategoryName} className='form-control' id="category_name" value={this.state.category_name} placeholder='Enter category' name='category_name'/>
                </div>
                <button className='btn btn-primary' type='submit'>Submit</button>
            </form>
        )
    }
}
