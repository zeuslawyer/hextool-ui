import {
  hexToString,
  hexToBigInt,
  hexToNumber,
  hexToBool,
  decodeAbiParameters,
  AbiParameter,
  stringToHex,
  numberToHex,
} from "viem";

import {hexstring} from "@/lib/types";

function stringFromHex(hex: hexstring): string {
  return hexToString(hex);
}

console.log(stringFromHex("0x5a7562696e"));
