'use client'

import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";

const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "About", href: "/about" },
  { text: "Contact", href: "/contact" },
  { text: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [navActive, setNavActive] = useState(null);
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header className="bg-bg1 dark:bg-bg1Dark text-primary dark:text-primaryDark">
      <nav className={`nav`}>
        <Link href={"/"}>
            <h1 className="logo">ianOlmstead</h1>
        </Link>
        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar bg-bg1 dark:bg-bg1Dark`}
        >
          <div className="bg-black dark:bg-white"></div>
          <div className="bg-black dark:bg-white"></div>
          <div className="bg-black dark:bg-white"></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list bg-bg1 dark:bg-bg1Dark`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx);
                setNavActive(false);
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;