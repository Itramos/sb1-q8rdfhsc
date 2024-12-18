import React from 'react';
import { GiftBox } from './components/GiftBox';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-100 via-pink-100 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-6">
        <GiftBox />
      </div>
    </div>
  );
}

export default App;