import React from 'react';

const TextArea = ({ setText }) => {
  return (
    <textarea
      onChange={(e) => setText(e.target.value)}
      className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
      placeholder="Masukkan teks panjang di sini..."
      rows="6"
    ></textarea>
  );
}

export default TextArea;
