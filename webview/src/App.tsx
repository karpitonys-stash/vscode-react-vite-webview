import React, { useState } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="p-6 max-w-sm bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">Hello, VS Code Webview!</h1>
        <p className="mt-2 text-gray-600">
          This is a React component styled with Tailwind CSS.
        </p>
        <div className="mt-4 flex items-center space-x-4">
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={() => setCount(count + 1)}
          >
            Increment
          </button>
          <span className="text-lg font-semibold text-gray-800">Count: {count}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
