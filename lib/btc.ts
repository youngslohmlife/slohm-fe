import { wBTC } from "@btc-vision/transaction";
import { networks } from "bitcoinjs-lib";
import { NextResponse } from "next/server";
import { getContract, IOP_20Contract, JSONRpcProvider, OP_20_ABI } from "opnet";

export const btcTest = async () => {
  const wbtcAddress = new wBTC(networks.regtest).getAddress();

  const provider = new JSONRpcProvider("https://regtest.opnet.org");
  const contract = getContract<IOP_20Contract>(
    wbtcAddress,
    OP_20_ABI,
    provider
  );

  const name = await contract.name();

  // const senderAddress: string = 'tb1p823gdnqvk8a90f8cu30w8ywvk29uh8txtqqnsmk6f5ktd7hlyl0q3cyz4c';
  // const provider: JSONRpcProvider = new JSONRpcProvider('https://testnet.opnet.org');
  // const contract: IOP_20Contract = getContract<IOP_20Contract>(
  //         'tb1q4tyhf8hpu04qjj3qaag20knun0spctultxzakw', // MOTO Contract
  //         OP_20_ABI,
  //         provider,
  //         senderAddress
  // );

  // const balanceExample = await contract.balanceOf(
  //     'tb1p823gdnqvk8a90f8cu30w8ywvk29uh8txtqqnsmk6f5ktd7hlyl0q3cyz4c', // Random address
  // );

  if ("error" in name) return NextResponse.json({ error: name.error });

  const decimals = await contract.decimals();

  if ("error" in decimals) return NextResponse.json({ error: decimals.error });

  return {
    wbtcName: name.decoded[0],
    wbtcAddress,
    wbtcDecimals: decimals.decoded[0],
    network: "regtest",
    // balance: balanceExample.balance
  };
};
