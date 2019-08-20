import React from 'react';
import './App.css';
import Table from './components/Table'
function App() {
  const sdata=[
        {
          name:'张三',
          fen:98
        },
        {
          name:'李四',
          fen:68
        },
      ] ;
  const theadData=['姓名' , '成绩22'] ;
  return (
    <div className="App">
      <header className="App-header">
        <Table sdata = {sdata} theadData={theadData} />
      </header>
    </div>
  );
}

export default App;
