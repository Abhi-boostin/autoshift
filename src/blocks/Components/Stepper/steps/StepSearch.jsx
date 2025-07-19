import React from 'react';

export default function StepSearch({ search, setSearch }) {
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">Input your search query</h2>
      <input
        value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Type your search..."
        className="border rounded px-2 py-1 mt-2 w-full max-w-md"
      />
    </>
  );
} 