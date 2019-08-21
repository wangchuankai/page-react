import React, { Component } from 'react'
import './App.css';
import Table from './components/Table'
import From from './components/From'
export default class App extends Component {
  state = {
    arr: [
      {
        name:'张三',
        fen:98
      },
      {
        name:'李四',
        fen:68
      },
    ]
  }
  removeCharacter = index => {
    const { arr } = this.state
    this.setState({
      arr: arr.filter((arr, i) => {
        return i !== index
      }),
    })
  }
  handleSubmit = obj => {
    this.setState({ arr: [...this.state.arr, obj] })
  }
  render() {
    const theadData=['姓名' , '成绩33'] ;
    const { arr } = this.state
    return (
      <div className="App">
      <header className="App-header">
        <Table sdata = {arr} theadData={theadData} removeCharacter={this.removeCharacter}  />
        <From handleSubmit={this.handleSubmit} />
      </header>
    </div>
    )
  }
}


