"use client";

import {decodeAbiParameters, parseAbiParameters} from "viem";

import React, {useState} from "react";
import {hexstring} from "@/lib/types";

// TODO @zeuslawyer refactor this to use the IOForm component.
const AbiDecodeComponent = () => {
  // State variables to store input values
  let [hexInput, setHexInput] = useState<hexstring | string>("");
  let [valuesInput, setValuesInput] = useState("");
  let [decodedOutput, setDecodedOutput] = useState<[]>([]); // Array of decoded values [value1, value2, ...

  // Function to handle decoding
  const handleDecode = async () => {
    // Implement decoding logic here
    console.log("Decoding...");
    if (hexInput.slice(0, 2) !== "0x") {
      hexInput = `0x${hexInput}`;
    }
    const decoded = decodeAbiParameters(parseAbiParameters(valuesInput), hexInput as hexstring);
    console.log(decoded);
    setDecodedOutput((decoded as []) || []);
  };

  return (
    <div className="mx-auto  mt-8 p-6 border rounded-sm shadow-lg bg-white">
      <h1 className="text-2xl font-semibold mb-4 text-center">ABI.DECODE</h1>
      <div className="w-full mb-10">
        <label htmlFor="hex" className="block text- font-medium text-gray-700">
          Hex-encoded string
        </label>
        <textarea
          id="hex"
          value={hexInput}
          placeholder={"0x"}
          onChange={e => setHexInput(e.target.value as hexstring)}
          className="border rounded px-2 py-1 bg-black text-slate-300"
        />
      </div>
      <div className="mb-10">
        <label htmlFor="values" className="block text-md font-medium text-gray-700">
          Types (commas separated)
        </label>
        <input
          type="text"
          id="values"
          value={valuesInput}
          placeholder="e.g. 'uint256, address, string'"
          onChange={e => setValuesInput(e.target.value)}
          className="border rounded px-2 py-1 bg-black text-slate-300"
        />
      </div>
      {decodedOutput.length ? (
        <div className="mb-10">
          <label htmlFor="values" className="block text-md font-medium text-gray-700">
            Decoded Output
          </label>
          <textarea
            readOnly
            id="decoded-output"
            value={decodedOutput.toString()}
            className="py-2 px-4 bg-green-800 text-white rounded-md focus:outline-none mb-4"
          />
        </div>
      ) : (
        ""
      )}
      <button
        className="w-64 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={handleDecode}
      >
        Decode
      </button>
    </div>
  );
};

export default AbiDecodeComponent;
