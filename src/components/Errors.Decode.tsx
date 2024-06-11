"use client";

import {decodeErrorResult} from "viem";
// fetch https://github.com/Cyfrin/ccip-contracts/blob/main/contracts-ccip/abi/v0.8/Router.json

import React, {useEffect, useState} from "react";
import {hexstring} from "@/lib/types";

const ErrorDecoder = () => {
  // State variables to store input values
  let [hexInput, setHexInput] = useState<hexstring | string>("");
  let [abi, setAbi] = useState("");
  let [decodedOutput, setDecodedOutput] = useState<{errorName: string; args: any[]} | null>(null); // Array of decoded values [value1, value2, ...

  useEffect(() => {
    async function getAbi() {
      try {
        const res = await fetch(
          " https://raw.githubusercontent.com/Cyfrin/ccip-contracts/main/contracts-ccip/abi/v0.8/Router.json "
        ); ////https://jsonplaceholder.typicode.com/todos/1

        console.log("Look here ", res);
        if (!res.ok) {
          throw new Error(`Failed to fetch ABI: ${res.status} from ${res.url}`);
        }
        setAbi(await res.json());
      } catch (error: any) {
        setDecodedOutput({errorName: "Error", args: [error.message]});
      }
    }
    getAbi();
  }, []);

  // Function to handle decoding
  const handleDecode = async () => {
    // Implement decoding logic here
    console.log("Decoding Error...");
    if (hexInput.slice(0, 2) !== "0x") {
      hexInput = `0x${hexInput}`;
    }
    let abi;
    // TODO @zeuslawyer wrap in try catch and see if decoding 0x07da6ee6 is correctly handled.
    // getAbi needs to be refactored to take in an input.
    const decoded = decodeErrorResult({
      abi,
      data: hexInput as hexstring, //
    });
    console.log(decoded);
  };

  return (
    <div className="mx-auto  mt-8 p-6 border rounded-sm shadow-lg bg-white">
      <h1 className="text-2xl font-semibold mb-4 text-center">ERROR DECODE</h1>
      <div className="w-full mb-10">
        <label htmlFor="hex" className="block text- font-medium text-gray-700">
          Error Hex String
        </label>
        <textarea
          id="hex"
          value={hexInput}
          placeholder={"0x"}
          onChange={e => setHexInput(e.target.value as hexstring)}
          className="border rounded px-2 py-1 bg-black text-slate-300"
        />
      </div>

      {decodedOutput?.errorName ? (
        <div className="mb-10">
          <label htmlFor="values" className="block text-md font-medium text-gray-700">
            Decoded Output
          </label>
          <textarea
            readOnly
            id="decoded-output"
            value={JSON.stringify(decodedOutput)}
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
        Decode Error
      </button>
    </div>
  );
};

export default ErrorDecoder;
