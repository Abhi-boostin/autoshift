import React from 'react';

export default function StepNumberOfCycles({ numberOfCycles, setNumberOfCycles }) {
  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value > 5) {
      alert('You can only select up to 5 cycles.');
      return;
    }
    setNumberOfCycles(value);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-2">Set Number of Cycles</h2>
      <p className="mb-2">
        Set the number of cycles you want to run (1-5).<br />
        <span className="text-yellow-400 font-medium">Higher the cycle, higher the time required.</span>
      </p>
      <input
        type="number"
        min={1}
        max={5}
        value={numberOfCycles}
        onChange={handleChange}
        className="border rounded px-2 py-1 mt-2 w-full max-w-md"
        placeholder="Enter a number between 1 and 5"
      />
    </>
  );
}
