import React, { useState } from 'react';
import TextArea from './components/TextArea';
import SplitButton from './components/SplitButton';
import Output from './components/Output';
import Snackbar from './components/Snackbar';

function App() {
  const [text, setText] = useState('');
  const [maxChar, setMaxChar] = useState(280);
  const [chunks, setChunks] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  const splitText = () => {
    let newChunks = [];
    for (let i = 0; i < text.length; i += maxChar) {
      newChunks.push(text.substring(i, i + maxChar));
    }
    setChunks(newChunks);
  }

  const handleCopy = (chunk) => {
    navigator.clipboard.writeText(chunk);
    setSnackbarMessage('Teks berhasil disalin!');
    setShowSnackbar(true);
    setTimeout(() => setShowSnackbar(false), 3000);
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
    <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3 lg:w-1/2">
      <h1 className="text-2xl font-bold mb-4 text-center">Split tulisanmu di sini!</h1>
      <TextArea setText={setText} />
      <div className="my-4 flex flex-col md:flex-row items-center">
        <label htmlFor="max_char" className="mr-2 mb-2 md:mb-0">Max Characters per Part:</label>
        <input
          id="max_char"
          type="number"
          value={maxChar}
          onChange={(e) => setMaxChar(parseInt(e.target.value))}
          className="border p-2 w-full md:w-auto"
        />
      </div>
      <SplitButton splitText={splitText} />
      <Output chunks={chunks} onCopy={handleCopy} />
      <Snackbar show={showSnackbar} message={snackbarMessage} />
    </div>
  </div>
);
}

export default App;
