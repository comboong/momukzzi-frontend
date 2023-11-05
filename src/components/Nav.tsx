"use client";

import Link from "next/link";
import { useState } from "react";

import navLinks from "./navLinks";
import { usePathname } from "next/navigation";

import { Dispatch, SetStateAction } from "react";

interface LinksProps {
  setIsDropMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Links = ({ setIsDropMenuOpen }: LinksProps) => {
  const pathname = usePathname();

  return (
    <>
      {navLinks.map((link) => (
        <Link href={link.link} key={link.title} passHref legacyBehavior>
          <a
            className={pathname === link.path ? "selected" : undefined}
            onClick={() => setIsDropMenuOpen(false)}
          >
            {link.title}
          </a>
        </Link>
      ))}
    </>
  );
};

const Nav = () => {
  const [isDropMenuOpen, setIsDropMenuOpen] = useState(false);

  return (
    <>
      <div>
        <Links setIsDropMenuOpen={setIsDropMenuOpen} />
        <svg
          onClick={() => setIsDropMenuOpen(!isDropMenuOpen)}
          xmlns="http://www.w3.org/2000/svg"
          height="40px"
          viewBox="0 0 24 24"
          width="40px"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
        </svg>
      </div>
      <div style={{ display: isDropMenuOpen ? "block" : "none" }}>
        <Links setIsDropMenuOpen={setIsDropMenuOpen} />
      </div>
    </>
  );
};

export default Nav;
