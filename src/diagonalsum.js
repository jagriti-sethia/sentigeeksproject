import React, { useState } from 'react';

const DiagonalSum = () => {
  const [matrix, setMatrix] = useState([
   [1, 5, 9, 13] ,
   [ 2, 6, 10, 14],
    [3, 7, 11, 15],
    [4, 8, 12, 16]
  ]);

  const calculateDiagonalSum = () => {
    let sum = 0;
    for (let i = 0; i < matrix.length; i++) {
      sum += matrix[i * matrix.length + i];
    }
    return sum;
  }

  return (
    <div>
        {matrix.map((row, rowIndex) => (

<div key={rowIndex}>

  {row.map((element, elementIndex) => (

    <div key={elementIndex}>{element}</div>

  ))}

</div>

))}
      <p>Sum of diagonal numbers: {calculateDiagonalSum()}</p>
    </div>
  );
}

export default DiagonalSum;