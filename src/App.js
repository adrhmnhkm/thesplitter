import React, { useEffect, useState } from 'react';
import TextArea from './components/TextArea';
import SplitButton from './components/SplitButton';
import Output from './components/Output';
import Snackbar from './components/Snackbar';
import Navbar from './components/Navbar';

function App() {
  const [text, setText] = useState('');
  const [maxChar, setMaxChar] = useState(280);
  const [chunks, setChunks] = useState([]);
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    localStorage.setItem('text', text);
    localStorage.setItem('chunks', JSON.stringify(chunks));
  }, [text, chunks]);

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
    <div className="flex flex-col items-center min-h-screen bg-gray-50 text-gray-800 font-sans">
    <Navbar />
    <div className="pt-32 w-full flex justify-center">
      <div className="bg-white shadow-md rounded-lg p-8 w-full md:w-2/3 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-6 text-center">Split Text Here!</h1>
        <TextArea setText={setText} />
        <div className="my-6 flex flex-col md:flex-row items-center">
          <label htmlFor="max_char" className="mb-2 md:mb-0 md:mr-4 font-medium">Max Characters per Part:</label>
          <input
            id="max_char"
            type="number"
            value={maxChar}
            onChange={(e) => setMaxChar(parseInt(e.target.value))}
            className="border border-gray-300 rounded-md p-2 flex-1"
          />
        </div>
        <SplitButton splitText={splitText} />
        <Output chunks={chunks} onCopy={handleCopy} />
        <Snackbar show={showSnackbar} message={snackbarMessage} />
      </div>
    </div>
  </div>
);
}

export default App;
