import React from 'react';

export default function StepEmail({ email, setEmail }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">Enter your email address</h2>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="you@example.com"
        className="border rounded px-2 py-1 mt-2 w-full max-w-md"
      />
    </>
  );
} 