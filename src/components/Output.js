import React from 'react';

function Output({ chunks, onCopy }) {
  return (
    <div className="mt-6">
      <h2 className="text-xl font-medium mb-4">Your Splits:</h2>
      {chunks.map((chunk, index) => (
        <div key={index} className="bg-gray-100 border border-gray-300 rounded-md p-4 mb-4 cursor-pointer" onClick={() => onCopy(chunk)}>
          <p>{chunk}</p>
        </div>
      ))}
    </div>
  );
}

export default Output;
