
import React from 'react';

//table header and body
const TableHeader = (props) => {
    const { headers } = props;
    return(
      <thead >
          <tr >
            { headers && headers.map((value, index) => {
                return <th key={index}><div>{value}</div></th>
            })}
          </tr>
      </thead>
    );
  }
  const TableBody = (props) => {
    const { headers, rows } = props;
  
    function buildRow(row, headers) {
      return (
           <tr key={row.id}>
           { headers.map((value, index) => {
               return <td key={index}>{row[value]}</td>
            })}
           </tr>
       )
    };
  
    return(
        <tbody>
          { rows && rows.map((value) => {
                  return buildRow(value, headers);
              })}
        </tbody>
  );
  }
  
  const Table = (props) => {
    const { headers, rows } = props;
    return (
      <div>
        <table className="table">
        <TableHeader headers={headers}></TableHeader>
        <TableBody headers={headers} rows={rows}></TableBody>
        </table>
      </div>
    );
  };

  export default Table;