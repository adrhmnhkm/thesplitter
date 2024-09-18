import React from 'react';

function SplitButton({ splitText }) {
  return (
    <button
      className="w-full bg-blue-500 text-white rounded-md py-2 mt-4 hover:bg-blue-600 transition duration-300"
      onClick={splitText}
    >
      Split Text
    </button>
  );
}

export default SplitButton;
