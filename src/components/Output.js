import React from 'react';

const Output = ({ chunks, onCopy }) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mt-4">Hasil Pecahan</h2>
      {chunks.map((chunk, index) => (
        <div key={index} className="bg-gray-100 border p-2 my-2 flex justify-between items-center rounded-md">
          <p className="mr-2">{chunk}</p>
          <button
            onClick={() => onCopy(chunk)}
            className="bg-blue-500 text-white px-2 py-1 rounded"
          >
            Salin
          </button>
        </div>
      ))}
    </div>
  );
}

export default Output;
