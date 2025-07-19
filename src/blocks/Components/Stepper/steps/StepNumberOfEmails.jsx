import React from 'react';

export default function StepNumberOfEmails({ numberOfEmails, setNumberOfEmails }) {
  const handleChange = (e) => {
    const value = Number(e.target.value);
    if (value > 50) {
      alert('In free trial you can only send 30 max mails');
      return;
    }
    setNumberOfEmails(value);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-2">Set Number of Emails</h2>
      <p className="mb-2">Set the number of mails you wanna extract between 1-30</p>
      <input
        type="number"
        min={1}
        max={30}
        value={numberOfEmails}
        onChange={handleChange}
        className="border rounded px-2 py-1 mt-2 w-full max-w-md"
        placeholder="Enter a number between 1 and 30"
      />
    </>
  );
} 