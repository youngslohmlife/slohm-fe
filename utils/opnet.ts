import { getContract, IOP_20Contract, JSONRpcProvider, OP_20_ABI } from "opnet";
/**
 * Creates a JSON-RPC provider to interact with the OP_NET metaprotocol.
 *
 * @param rpcUrl The URL of the OP_NET RPC (for regtest, testnet, or mainnet).
 * @returns A provider to interact with the OP_NET metaprotocol.
 */
const provider = new JSONRpcProvider("https://regtest.opnet.org");
/**
 * Fetches and logs the balance of an address in rBTC (regtest Bitcoin on the OP_NET metaprotocol).
 *
 * @param address The Taproot address to check the balance for.
 * @returns Logs the rBTC balance of the address.
 */
export const getBalance = async (address: string) => {
  // Fetch the balance of the address in satoshis (1 rBTC = 100,000,000 satoshis)
  const balance = await provider.getBalance(address);

  // Convert the balance from satoshis to rBTC
  const formattedBalance = parseFloat(balance.toString()) / 10 ** 8;
  return `Balance of ${address} is ${formattedBalance.toLocaleString()} rBTC`;
};
/**
 * Fetches and logs the balance of a specific OP_20 token for an address.
 *
 * @param address The Taproot address to check the balance for.
 * @param tokenAddress The contract address of the OP_20 token on OP_NET.
 * @returns Logs the OP_20 token balance of the address.
 */
export const getBalanceOfToken = async (
  address: string,
  tokenAddress: string
) => {
  // Get the OP_20 contract instance using the token's contract address and the OP_20 ABI
  const contract = getContract<IOP_20Contract>(
    tokenAddress,
    OP_20_ABI,
    provider
  );
  // Call the balanceOf method of the OP_20 contract to fetch the balance
  const balance = await contract.balanceOf(address);
  // Check if the contract call returned an error
  if ("error" in balance) return `${balance.error}`;
  // Convert the token balance from smallest unit (e.g., satoshis) to full token units
  const formattedBalance = parseFloat(balance.decoded[0].toString()) / 10 ** 8;
  // Log the token balance
  return `Balance of ${address} is ${formattedBalance.toLocaleString()} MOTO`;
};
