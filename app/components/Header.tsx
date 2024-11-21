"use client";

import React, { ReactNode, useState } from "react";
import { Search, HelpCircle, Settings, Grid } from "lucide-react";
import Link from "next/link";

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

interface NavItemProps {
  children: ReactNode;
  active?: boolean;
  href?: string;
}

const NavItem = ({ children, href = "#", active = false }: NavItemProps) => (
  <a
    href={href}
    className={`px-4 py-4 text-sm hover:text-blue-600 whitespace-nowrap ${
      active
        ? "text-blue-600 border-b-4 border-blue-600 lg:border-b-4"
        : "text-gray-600"
    }`}
  >
    {children}
  </a>
);

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden">
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="flex justify-between items-center p-4 border-b">
          <span className="text-lg font-medium">Google News</span>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <XIcon />
          </button>
        </div>
        <nav className="flex flex-col">
          <a href="#" className="px-4 py-3 hover:bg-gray-100">
            Home
          </a>
          <Link
            href="/"
            className="px-4 py-3 hover:bg-gray-100 bg-blue-50 text-blue-600"
          >
            For you
          </Link>
          <Link href="/following" className="px-4 py-3 hover:bg-gray-100">
            Following
          </Link>
          <a href="#" className="px-4 py-3 hover:bg-gray-100">
            News Showcase
          </a>
          <a href="#" className="px-4 py-3 hover:bg-gray-100">
            New Zealand
          </a>
          <a href="#" className="px-4 py-3 hover:bg-gray-100">
            World
          </a>
          <a href="#" className="px-4 py-3 hover:bg-gray-100">
            Local
          </a>
          <a href="#" className="px-4 py-3 hover:bg-gray-100">
            Business
          </a>
          <a href="#" className="px-4 py-3 hover:bg-gray-100">
            Technology
          </a>
          <a href="#" className="px-4 py-3 hover:bg-gray-100">
            Entertainment
          </a>
          <a href="#" className="px-4 py-3 hover:bg-gray-100">
            Sports
          </a>
          <a href="#" className="px-4 py-3 hover:bg-gray-100">
            Science
          </a>
          <a href="#" className="px-4 py-3 hover:bg-gray-100">
            Health
          </a>
        </nav>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-40">
      {/* Top bar */}
      <div className="flex items-center px-4 lg:px-6 h-16 gap-2 lg:gap-4">
        {/* Mobile menu button */}
        <button
          className="p-2 hover:bg-gray-100 rounded-full lg:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <MenuIcon />
        </button>

        {/* Logo */}
        <div className="flex items-center gap-8">
          <a href="#" className="flex items-center hidden sm:block">
            <span className="text-xl text-gray-600 ml-1">Google News</span>
          </a>
        </div>

        {/* Search bar */}
        <div className="flex-1 max-w-2xl mx-auto relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search for topics, locations & sources"
            className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
        </div>

        {/* Buttons immediately after the search bar */}
        <div className="flex items-center gap-2 ml-2">
          <button className="p-2 hover:bg-gray-100 rounded-full hidden lg:flex">
            <HelpCircle className="w-6 h-6 text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full hidden lg:flex">
            <Settings className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Right side icons at the end */}
        <div className="flex items-center gap-2 ml-4">
          <button className="p-2 hover:bg-gray-100 rounded-full hidden lg:flex">
            <Grid className="w-6 h-6 text-gray-600" />
          </button>
          <button className="ml-2 w-8 h-8 rounded-full bg-rose-500 text-white flex items-center justify-center">
            G
          </button>
        </div>
      </div>

      {/* Navigation - Hidden on mobile */}
      <nav className="hidden lg:flex items-center px-6 overflow-x-auto">
        <NavItem>Home</NavItem>
        <NavItem href="/" active>
          For you
        </NavItem>
        <NavItem href="/following">Following</NavItem>
        <NavItem>News Showcase</NavItem>
        <NavItem>New Zealand</NavItem>
        <NavItem>World</NavItem>
        <NavItem>Local</NavItem>
        <NavItem>Business</NavItem>
        <NavItem>Technology</NavItem>
        <NavItem>Entertainment</NavItem>
        <NavItem>Sports</NavItem>
        <NavItem>Science</NavItem>
        <NavItem>Health</NavItem>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </header>
  );
};

export default Header;
