"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for menu

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="text-white">
      <nav className="bg-black text-white fixed font-Poppins flex items-center justify-between h-20 w-full top-0 left-0 px-6 z-50">
        <div className="text-2xl font-bold ml-4">Tayyab</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex w-full justify-center items-center space-x-10 text-sm md:text-base lg:text-lg">
          <li><Link href="/" className="hover:text-green-300">Home</Link></li>
          <li><Link href="/about" className="hover:text-green-300">About</Link></li>
          <li><Link href="/contact" className="hover:text-green-300">Contact</Link></li>
          <li><Link href="/projects" className="hover:text-green-300">Projects</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
 <div className="fixed top-20 left-0 w-full bg-black text-white shadow-md py-6 px-6 z-50 flex flex-col space-y-6 md:hidden font-Poppins items-center">
          
            <Link href="/" className="hover:text-green-300 text-lg block" onClick={() => setMenuOpen(false)}>Home</Link>
     <Link href="/about" className="hover:text-green-300 text-lg block" onClick={() => setMenuOpen(false)}>About</Link>
         <Link href="/contact" className="hover:text-green-300 text-lg block" onClick={() => setMenuOpen(false)}>Contact</Link>
           <Link href="/projects" className="hover:text-green-300 text-lg block" onClick={() => setMenuOpen(false)}>Projects</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
