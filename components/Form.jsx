import React, { Component } from 'react';

import { createUser } from '../sources/users';
import {getUser} from "../sources/list";
import App from "./App";


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
                firstName: '',
                secondName: '',
                phone: '',
                email: '',
                age: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        createUser({ info: this.state}).then(res => console.log('res: ', res));
    }

    handleInputChange(e) {
        const name = e.target.name;
        this.setState({ [name]: e.target.value });
    }
    handleClick(e) {
        e.preventDefault();
        getUser()
            .then(({data}) => this.setState( { list: data }));
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Имя
                    <input type="text" name='firstName' onChange={ this.handleInputChange} required/>
                </label>
                <label>
                    Фамилия
                    <input type="text" name='secondName' onChange={ this.handleInputChange} required/>
                </label>
                <label>
                    Телефон
                    <input type="tel" name='phone'  onChange={ this.handleInputChange}/>
                </label>
                <label>
                    Email
                    <input type="email" name='email' onChange={ this.handleInputChange}/>
                </label>
                <label>
                    Возраст
                    <input type="number" name='age' onChange={ this.handleInputChange}/>
                </label>
                <button>Сохранить данные</button>
            </form>
        )
    }
}

export default Form;
