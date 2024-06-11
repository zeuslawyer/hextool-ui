"use client";

import React, {ReactEventHandler, useState} from "react";

const IOForm = ({onSubmit}) => {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    onSubmit(inputValue1, inputValue2);
    setInputValue1(""); // Clear form after submit
    setInputValue2("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
      <label htmlFor="input1">Input 1:</label>
      <input
        id="input1"
        placeholder="input..."
        type="text"
        value={inputValue1}
        onChange={e => setInputValue1(e.target.value)}
        className="border rounded px-2 py-1 bg-black text-slate-300 w-64"
      />
      <label htmlFor="input2">Input 2:</label>
      <input
        id="input2"
        placeholder="input..."
        type="text"
        value={inputValue2}
        onChange={e => setInputValue2(e.target.value)}
        className="border rounded px-2 py-1 bg-black text-slate-300 w-64"
      />
      <button
        type="submit"
        className="py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 w-64 "
      >
        Submit
      </button>
    </form>
  );
};

export default IOForm;
