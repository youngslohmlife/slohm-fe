"use client";
import React from "react";
import { FaBalanceScale } from "react-icons/fa";
import { SlWallet } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "@/assets/image/logo-white.png";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex h-screen bg-gray-100">
        <div className="hidden md:flex flex-col w-64 bg-gray-800">
          <div className="flex items-center justify-center h-16 bg-gray-900">
            <a href="/">
              <span className="text-white font-bold uppercase p-2">
                <img className="w-24" src={Logo.src} alt="SLOHM" />
              </span>
            </a>
          </div>
          <div className="flex flex-col flex-1 overflow-y-auto">
            <nav className="flex-1 px-2 py-4 bg-gray-800">
              <a
                href="/"
                className="flex items-center px-4 py-2 text-gray-100 hover:bg-gray-700"
              >
                <FaBalanceScale className="h-6 w-6 mr-2" />
                WBTC Balance
              </a>
            </nav>
          </div>
        </div>
        <div className="flex flex-col flex-1 overflow-y-auto">
          <div className="flex items-center justify-between py-4 bg-white border-b border-gray-200">
            <div className="flex items-center px-4">
              <button className="text-gray-500 focus:outline-none focus:text-gray-700">
                <RxHamburgerMenu className="h-6 w-6" />
              </button>
            </div>
            <div className="flex items-center pr-4">
              <button className="flex items-center text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700">
                <SlWallet className="h-6 w-6" />
              </button>
            </div>
          </div>
          <div className="p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
