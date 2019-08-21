import React, { Component } from 'react'

export default class From extends Component {
    constructor(props){
        super(props)

        this.initaiState={
            name:'',
            fen:'',
        }
        this.state = this.initaiState;
    }
    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value,
        })
    }

    submitForm = () => {
        console.log(this.props)
        this.props.handleSubmit(this.state)
        this.setState(this.initaiState)
    }

    render() {
        const { name, fen } = this.state;

        return (
            <form>
            <label>姓名</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={this.handleChange} />
                <br/>
            <label>分数</label>
            <input
                type="text"
                name="fen"
                value={fen}
                onChange={this.handleChange} />
                <br/>
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        );
    }
}
