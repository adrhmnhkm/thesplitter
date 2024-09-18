import React, { useState } from 'react';
import TextArea from './components/TextArea';
import SplitButton from './components/SplitButton';
import Output from './components/Output';

function App() {
  const [text, setText] = useState('');
  const [maxChar, setMaxChar] = useState(280);
  const [chunks, setChunks] = useState([]);

  const splitText = () => {
    let newChunks = [];
    for (let i = 0; i < text.length; i += maxChar) {
      newChunks.push(text.substring(i, i + maxChar));
    }
    setChunks(newChunks);
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pemisah Tulisan Panjang</h1>
      <TextArea setText={setText} />
      <div className="my-4">
        <label htmlFor="max_char" className="mr-2">Max Characters per Part:</label>
        <input
          id="max_char"
          type="number"
          value={maxChar}
          onChange={(e) => setMaxChar(parseInt(e.target.value))}
          className="border p-2"
        />
      </div>
      <SplitButton splitText={splitText} />
      <Output chunks={chunks} />
    </div>
  );
}

export default App;
