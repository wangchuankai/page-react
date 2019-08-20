import React from 'react';

const TableBody = props => {
    const rows = props.sdata.map((item , index)=>{
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.fen}</td>
            </tr>
        )
        })
    return (
        <tbody>
            {rows}
        </tbody>
    );
}

export default TableBody;
