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
        type="text"
        value={inputValue1}
        onChange={e => setInputValue1(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <label htmlFor="input2">Input 2:</label>
      <input
        id="input2"
        type="text"
        value={inputValue2}
        onChange={e => setInputValue2(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
};

export default IOForm;
