import React, { Component } from 'react';
import TableHead from './TableHead'
import TableBody from './TableBody'
class Table extends Component {
  render (){
    const { sdata ,theadData,removeCharacter } = this.props;
    return(
      <table>
        <TableHead theadData ={theadData} />
        <TableBody sdata={sdata}  removeCharacter={removeCharacter} />
      </table>
    )
  }
}

export default Table;