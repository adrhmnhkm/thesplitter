import React from 'react';

const TextArea = ({ setText }) => {
  return (
    <textarea
      onChange={(e) => setText(e.target.value)}
      className="w-full border p-2"
      placeholder="Masukkan teks panjang di sini..."
    ></textarea>
  );
}

export default TextArea;
