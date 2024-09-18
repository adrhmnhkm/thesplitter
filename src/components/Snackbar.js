import React from 'react';

function Snackbar({ show, message }) {
  return (
    show ? (
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded-md shadow-md">
        {message}
      </div>
    ) : null
  );
}

export default Snackbar;
