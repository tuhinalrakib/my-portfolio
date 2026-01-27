"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll ইফেক্ট হ্যান্ডেল করার জন্য
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Skills", href: "/skills" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 px-6 py-4 ${
        scrolled 
        ? "bg-[#030712]/80 backdrop-blur-lg border-b border-white/10 py-3" 
        : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="group">
          <h1 className="text-2xl font-black tracking-tighter text-white">
            TUHIN<span className="text-purple-500 group-hover:text-pink-500 transition-colors">.DEV</span>
          </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-300 hover:text-white hover:border-b border-purple-500 transition-all duration-200 pb-1"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="px-5 py-2 bg-white/5 border border-white/10 rounded-full text-sm font-semibold text-white hover:bg-white hover:text-black transition-all duration-300"
          >
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-0 right-0 w-full h-screen bg-[#030712] z-50 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            <button
              className="absolute top-6 right-6 text-white text-4xl"
              onClick={() => setMobileOpen(false)}
            >
              <HiX />
            </button>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="text-3xl font-bold text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}