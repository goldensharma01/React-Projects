import { useState, useCallback, useEffect, useRef } from 'react';
import React from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-4">
      <div className="w-full max-w-xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg rounded-2xl p-6 text-white">
        <h1 className="text-2xl font-semibold text-center mb-6">🔐 Password Generator</h1>

        <div className="flex items-center rounded-lg overflow-hidden bg-white text-black focus-within:ring-2 ring-blue-500 transition">
          <input
            type="text"
            value={password}
            className="w-full px-4 py-2 outline-none text-lg font-mono"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 transition"
          >
            Copy
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-4 text-sm">
          <div className="flex items-center justify-between">
            <label className="flex-1">Password Length: {length}</label>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-2/3 accent-blue-500"
            />
          </div>

          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              id="numberInput"
              checked={numberAllowed}
              onChange={() => setNumberAllowed((prev) => !prev)}
              className="accent-green-500"
            />
            <label htmlFor="numberInput" className="cursor-pointer">
              Include Numbers
            </label>
          </div>

          <div className="flex items-center gap-x-3">
            <input
              type="checkbox"
              id="charInput"
              checked={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
              className="accent-purple-500"
            />
            <label htmlFor="charInput" className="cursor-pointer">
              Include Special Characters
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
