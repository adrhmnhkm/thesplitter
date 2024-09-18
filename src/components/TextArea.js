import React from 'react';

function TextArea({ setText }) {
  return (
    <textarea
      placeholder="Type or paste your text here!"
      className="w-full h-32 border border-gray-300 rounded-md p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={(e) => setText(e.target.value)}
    />
  );
}

export default TextArea;
