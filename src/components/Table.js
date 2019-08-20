import React, { Component } from 'react';
import TableHead from './TableHead'
import TableBody from './TableBody'
class Table extends Component {
  render (){
    const { sdata ,theadData} = this.props;
    return(
      <table>
        <TableHead theadData ={theadData} />
        <TableBody sdata={sdata} />
      </table>
    )
  }
}

export default Table;