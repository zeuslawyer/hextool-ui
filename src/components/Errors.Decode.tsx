"use client";

import {decodeErrorResult} from "viem";
import {Abi} from "abitype";
import {toast} from "react-toastify";

import React, {useEffect, useState} from "react";
import {hexstring} from "@/lib/types";

const ErrorDecoder = () => {
  // State variables to store input values
  let [hexInput, setHexInput] = useState<hexstring | string>("");
  let [abi, setAbi] = useState<string | Abi>("");
  let [decodedOutput, setDecodedOutput] = useState<{errorName: string; args?: any[]; errorMessage?: string} | null>(
    null
  ); // Array of decoded values [value1, value2, ...

  useEffect(() => {
    async function getAbi() {
      try {
        const res = await fetch(
          " https://raw.githubusercontent.com/Cyfrin/ccip-contracts/main/contracts-ccip/abi/v0.8/Router.json "
        ); ////https://jsonplaceholder.typicode.com/todos/1

        if (!res.ok) {
          throw new Error(`Failed to fetch ABI: ${res.status} from ${res.url}`);
        }

        setAbi(await res.json());
      } catch (error: any) {
        console.log("ERROR??? ", error);
        setDecodedOutput({errorName: "Error", args: [error.message]});
      }
    }
    getAbi();
  }, []);

  // Function to handle decoding
  const handleDecode = async () => {
    setDecodedOutput(null);

    // Implement decoding logic here
    if (hexInput.slice(0, 2) !== "0x") {
      hexInput = `0x${hexInput}`;
    }

    try {
      const decoded = decodeErrorResult({
        abi: abi as Abi,
        data: hexInput as hexstring,
      });
      console.log(decoded);
      setDecodedOutput({errorName: decoded.abiItem.name, args: decoded.args});
    } catch (error) {
      console.log("Didnt work  ", error);
      // TODO @zeuslawyer why is toast not firing?
      toast.error(`Error decoding hex " ${error.name}`);
      alert(`Error decoding hex " ${error.name}`);
    }
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
