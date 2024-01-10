import Image from "next/image";
import Link from "next/link";
import React from "react";

import { NAV_LINKS } from "@/constants";

const Navbar = () => {
  return (
    <nav className="max-container flexBetween padding-container relative x-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="">
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
