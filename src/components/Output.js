import React from 'react';

const Output = ({ chunks }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mt-4">Hasil Pecahan</h2>
      {chunks.map((chunk, index) => (
        <div key={index} className="bg-gray-100 border p-2 my-2">
          <p>{chunk}</p>
        </div>
      ))}
    </div>
  );
}

export default Output;
