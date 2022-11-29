import React, { Component } from "react";

export default class App extends Component {
    state = {
        value1: "",
        value2: "",
        value3: "",
        boxText: "Show Password",
        checked: false,
        type: 'password'
    };
    handleChange1 = event => this.setState({ value1: event.target.value });
    handleClick1 = () => this.setState({ value1: "" });
    handleChange2 = event => this.setState({ value2: event.target.value });
    handleClick2 = () => this.setState({ value2: "" });
    handleChange3 = event => {
        this.setState({ value3: event.target.value });
        this.state.type === 'password' ? this.setState({ type: 'password' }) : this.setState({ type: 'text' })
    }
    handleClick3 = () => {
        this.setState({ value3: "" });
    }


    clickCheck = () => {

        if (this.state.checked === true) {
            this.setState({ boxText: 'Show Password' })
        }
        if (this.state.checked === false) {
            this.setState({ boxText: 'Hide password' })
        }
        !this.state.checked ? this.setState({ checked: true }) : this.setState({ checked: false })
        this.state.type === 'password' ? this.setState({ type: 'text' }) : this.setState({ type: 'password' })
    }


    render() {
        return (
            <div>
                <label>
                    Name: <input value={this.state.value1} name="Name" onChange={this.handleChange1} />
                    <button onClick={this.handleClick1}>X</button>
                </label>

                <label>
                    E-mail: <input value={this.state.value2} name="Name" onChange={this.handleChange2} />
                    <button onClick={this.handleClick2}>X</button>
                </label>

                <label>
                    Password: <input className="password" value={this.state.value3} type={this.state.type} name="Name" onChange={this.handleChange3} />
                    <button onClick={this.handleClick3}>X</button>
                </label>

                <label>{this.state.boxText}
                    <input className="checkBox" type="checkbox" checked={this.state.checked} onChange={this.clickCheck}></input>
                </label>
            </div>
        );
    }
}