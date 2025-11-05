import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Highlights", href: "#highlights" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Contact Us", href: "#contact" },
];

const Navbar = () => {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-[#111111]/95 backdrop-blur-sm">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="text-white text-2xl font-semibold tracking-wide">
          VyomGarud
        </div>

        {/* Nav Menu */}
        <ul className="hidden md:flex gap-8 text-white">
          {navItems.map((item, index) => (
            <li key={index}>
              <motion.a
                href={item.href}
                onClick={() => setActive(item.label)}
                className="relative font-light tracking-wide cursor-pointer"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.label}
                {/* Active underline animation */}
                {active === item.label && (
                  <motion.span
                    layoutId="underline"
                    className="absolute left-0 -bottom-1 h-[2px] w-full bg-white"
                  />
                )}
              </motion.a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#ff7b00] text-white px-5 py-2 rounded-full font-medium shadow-md hover:shadow-orange-500/40 transition-all duration-300"
        >
          Get in touch
        </motion.a>
      </nav>
    </header>
  );
};

export default Navbar;
