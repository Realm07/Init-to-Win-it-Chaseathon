import React, { useState } from "react";

export default function CounterText() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      {/* Counter Section */}
      <div className="bg-white shadow-md rounded-xl p-6 mb-6 w-72 text-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Counter</h2>
        <p className="text-2xl font-semibold mb-4">{count}</p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600"
          >
            -
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600"
          >
            +
          </button>
        </div>
      </div>

      {/* Live Text Preview Section */}
      <div className="bg-white shadow-md rounded-xl p-6 w-72">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Live Preview</h2>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
        />
        <p className="mt-4 text-gray-700">
          <span className="font-semibold">Output:</span> {text}
        </p>
      </div>
    </div>
  );
}
