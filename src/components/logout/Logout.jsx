import React from 'react';

function Logout({ onLogout }) {
  return (
    <button className="bg-red-500 hover:bg-red-600 text-white rounded-md py-2 px-4" onClick={onLogout}>
      Logout
    </button>
  );
}

export default Logout;