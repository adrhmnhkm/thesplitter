import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white p-4 shadow fixed w-full z-10 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black">The Splitter</h1>
      </div>
    </nav>
  );
}

export default Navbar;
