// import { ROUTER_ADDRESS_REGTEST, wBTC } from "@btc-vision/transaction";
// import { networks } from "bitcoinjs-lib";
import { WBTC } from "./components/wbtc";
export default function Home() {
  // const wbtcAddress = new wBTC(networks.regtest).getAddress();
  // const routerAddress = ROUTER_ADDRESS_REGTEST;
  // const network = "regtest";
  // console.log(wbtcAddress)
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-2xl text-center gap-10 bg-black text-white">
      {/* <p>wBTC Address: {wbtcAddress}</p>
      <p>Router Address: {routerAddress}</p>
      <p>Network: {network}</p> */}
      <WBTC />
    </main>
  );
}
