import React from 'react';

export default function StepSearch({ search, setSearch }) {
  const handleChange = e => {
    // Replace all spaces with '+'
    const value = e.target.value.replace(/\s+/g, '+');
    setSearch(value);
  };
  return (
    <>
      <h2 className="text-2xl font-bold mb-2">Input your search query like Kanpur BookStore</h2>
      <input
        value={search}
        onChange={handleChange}
        placeholder="Type your search..."
        className="border rounded px-2 py-1 mt-2 w-full max-w-md"
      />
    </>
  );
} 