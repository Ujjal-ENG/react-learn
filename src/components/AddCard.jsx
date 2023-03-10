import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class AddCard extends Component {
    state = {
        name: '',
        email: ''
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === '' && this.state.email === '') {
            alert('All the field are mandatory');
            return;
        }

        this.props.addContactHandler(this.state);
        this.setState({ name: '', email: '' });
    };
    render() {
        return (
            <>
                <h2>Add Contact</h2>
                <form onSubmit={this.add}>
                    <label htmlFor="name" className="font-bold px-4">
                        Name:{' '}
                    </label>
                    <input
                        type="text"
                        id="name"
                        placeholder="Enter the Name Here"
                        className="p-2 bg-slate-200 rounded-lg w-2/12 hover:outline outline-orange-600 transition-all"
                        value={this.state.name}
                        onChange={(e) => this.setState({ name: e.target.value })}
                    />

                    <label htmlFor="name" className="font-bold px-4">
                        Email:{' '}
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter the Email Here"
                        className="p-2 bg-slate-200 rounded-lg w-2/12 hover:outline outline-orange-600 transition-all"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    />

                    <button className=" mx-6 bg-blue-600 px-6 py-2 rounded-lg text-white font-bold text-2xl cursor-pointer active:px-5 active:py-1 transition-all">Add Item</button>
                </form>
                <button className=" m-6 bg-blue-600 px-6 py-2 rounded-lg text-white font-bold text-2xl cursor-pointer active:px-5 active:py-1 transition-all">
                    <Link to="/add/contact-list">Show the ListItem</Link>
                </button>
            </>
        );
    }
}
