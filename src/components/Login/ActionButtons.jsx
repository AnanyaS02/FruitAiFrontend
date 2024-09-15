import React from 'react';

function ActionButtons({ onLoginClick }) {
  return (
    <>
      <div className="flex flex-col justify-center self-stretch p-1 mt-9 text-2xl text-white whitespace-nowrap bg-white">
        <button 
          className="px-16 py-1.5 bg-sky-600 rounded-md shadow-[0px_0px_4px_rgba(0,0,0,0.25)]"
          onClick={onLoginClick} // Use the handler passed from parent
        >
          Login
        </button>
      </div>
      <p className="mt-2 text-2xl text-neutral-500">or connect with</p>
    </>
  );
}

export default ActionButtons;
