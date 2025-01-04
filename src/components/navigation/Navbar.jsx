import React from "react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import ConnectWallet from "./ConnectWallet";
const Navbar = ({ showConnectWallet }) => {
  return (
    <header className="relative container mx-auto px-4 py-8 z-10">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/icons/A-logo.png"
            alt="Logo"
            width={33}
            height={33}
            priority
          />
          <span className="text-xl font-medium">SourceNode</span>
        </Link>
        <div className="flex flex-row items-center space-x-4">
          <Link
            href="#features"
            className="hover:text-blue-400 transition-colors text-sm md:text-base"
          >
            Features
          </Link>
          <div className="flex items-center gap-4">
            <Link
              href="/sign-in"
              className={buttonVariants({ size: "sm", variant: "ghost" })}
            >
              Login
            </Link>
            <Link
              href="/sign-up"
              className={buttonVariants({
                size: "sm",
                className:
                  "hidden md:flex bg-[#034ae2] text-white hover:bg-[#0452fb]",
              })}
            >
              Sign Up
            </Link>
            {showConnectWallet && <ConnectWallet />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
