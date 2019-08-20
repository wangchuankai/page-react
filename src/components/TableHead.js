import React from 'react';

const TableHead = (props) => {
    console.log(props.theadData);
    // const {theadData} = this.props;
    const tds = props.theadData.map((item,index)=>{
        return (
            <td key={index}> {item}</td>
        )
    })
    return (
       <thead>
           <tr>
           {tds}
           </tr>
       </thead>
    );
}

export default TableHead;
