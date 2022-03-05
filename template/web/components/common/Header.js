import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "../icons/MenuIcon";
import { motion } from "framer-motion";
import CloseIcon from "../icons/CloseIcon";
import { useIsSm } from "../../lib/hooks/useMediaQuery";

/**
 * Header component
 *
 * @return {JSX.Element} JSX Code for the Header Component
 */
export default function Header() {
  const isSmall = useIsSm();
  const [navOpen, setNavOpen] = useState(false);

  // Framer motion variants for nav animation
  const variants = {
    mobile: {
      opacity: navOpen ? 1 : 0,
      x: navOpen ? 0 : 100,
    },
    desktop: {
      opacity: 1,
      x: 0,
      // Transition set to "easeOut" with a duration of 0 to remove desktop animation
      transition: {
        ease: "easeOut",
        duration: 0,
      },
    },
  };

  // Setting framer motion attributes for nav.motion element
  const attributes = {
    variants: variants,
    initial: false,
    animate: isSmall ? "desktop" : "mobile",
  };

  return (
    <header className="bg-white shadow-md mb-8">
      <div className="container py-8 px-2 flex items-center justify-between">
        <Link href="/">
          <a className="hover:opacity-50 transition-opacity duration-300">
            <Image src="/images/reach-logo.png" width={147} height={41} />
          </a>
        </Link>
        <button onClick={() => setNavOpen(!navOpen)} className="z-10 sm:hidden">
          {navOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <motion.nav
          {...attributes}
          className={`fixed top-0 left-0 right-0 h-screen w-screen bg-lynx pointer-events-none sm:visible sm:relative sm:w-auto sm:h-auto sm:bg-transparent ${
            navOpen ? "pointer-events-auto" : "pointer-events-none"
          } sm:pointer-events-auto`}
        >
          <ul className="list-none pb-4 pt-24 text-center sm:p-0 sm:flex sm:space-x-4">
            <li className="text-2xl block sm:text-base">
              <Link href="/">Home</Link>
            </li>
            <li className="text-2xl block sm:text-base">
              <Link href="/blog">Blog</Link>
            </li>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
}
