import React, { useState } from "react";

export const UserLogin = ({ handleLogin }) => {
  const [name, setName] = useState("");

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-md p-6  m-64">
      <div className="mb-6">
        <h2 className="text-3xl text-center mb-4">Login</h2>
        <input
          type="text"
          placeholder="Enter your name"
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          onClick={() => handleLogin(name)}
        >
          Join
        </button>
      </div>
    </div>
  );
};
