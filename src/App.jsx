import React, { useEffect, useState } from "react";
import { names } from "./constants";

const App = () => {
  const [tableData, setTableData] = useState(names);
  console.log("tableData: ", tableData);

  useEffect(() => {
    const distinctNames = [...new Set(names)];
    console.log("distinctNames: ", distinctNames);

    const nameCounts = names.reduce((countMap, name) => {
      countMap[name] = (countMap[name] || 0) + 1;
      return countMap;
    }, {});
    console.log("nameCounts: ", nameCounts);

    const tableRows = distinctNames.map((name) => {
      const count = nameCounts[name];
      let color = "green";
      if (count > 0 && count < 3) {
        color = "red";
      } else if (count > 2 && count < 10) {
        color = "yellow";
      }
      return { name, count, color };
    });
    console.log("tableRows: ", tableRows);

    setTableData(tableRows);
  }, []);

  return (
    <div style={{margin:'50px'}}>
        <table style={{width:'100%',border: '1px solid'}} >
      <thead>
        <tr>
          <th>Name</th>
          <th>Duplicates</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index} style={{ backgroundColor: row.color }}>
            <td>{row.name}</td>
            <td>{row.count}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default App;
