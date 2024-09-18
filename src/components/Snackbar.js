import React from 'react';
import { CSSTransition } from 'react-transition-group';

const Snackbar = ({ show, message }) => {
  return (
    <CSSTransition
      in={show}
      timeout={300}
      classNames="snackbar"
      unmountOnExit
    >
      <div className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded shadow-lg">
        {message}
      </div>
    </CSSTransition>
  );
}

export default Snackbar;
