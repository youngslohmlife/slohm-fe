export const convertSatoshisToBTC = (satoshis: bigint): string => {
  return (Number(satoshis || 0n) / 100000000)
    .toFixed(7)
    .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, "$1");
};
export const convertBTCtoSatoshis = (btc: string): bigint => {
  return BigInt(Math.floor(Number(btc) * 100000000));
};
