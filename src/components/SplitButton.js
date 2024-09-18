import React from 'react';

const SplitButton = ({ splitText }) => {
  return (
    <button
      onClick={splitText}
      className="bg-blue-500 text-white px-4 py-2 rounded mt-4 w-full md:w-auto hover:bg-blue-600 transition duration-300"
    >
      Pecah Tulisan
    </button>
  );
}

export default SplitButton;
