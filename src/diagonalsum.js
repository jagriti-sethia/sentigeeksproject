import React, { useState } from 'react';

const DiagonalSum = () => {
  const [matrix, setMatrix] = useState([
   [1,2,3,4] ,
   [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
  ]);

  const mainDiagonalSum = matrix.reduce((sum, row, index) => sum + row[index], 0);

  // Calculate the sum of the anti-diagonal (secondary diagonal)
  const antiDiagonalSum = matrix.reduce((sum, row, index) => sum + row[row.length - 1 - index], 0);

  return (
    <div className='container Diagonal'>
       <h2>2D Matrix:</h2>
      <table>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td key={colIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <h1>Main Diagonal Sum: {mainDiagonalSum}</h1>
      <h1>Anti-Diagonal Sum: {antiDiagonalSum}</h1>
    </div>
  );
}

export default DiagonalSum;