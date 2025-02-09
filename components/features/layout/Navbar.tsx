"use client"; // Adicione esta linha no topo do arquivo

import Link from "next/link";
import { Home, User, Folder, FileText, Menu } from "lucide-react";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu mobile

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    const navElement = document.getElementById('navbar');
    if (navElement && !navElement.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav id="navbar" className="w-full reflection reflection-below reflection-opacity-50 text-green-400 font-digital text-4xl relative z-50">
      <div className="flex justify-center items-center px-4">
        <div className="menu-icon md:hidden" onClick={handleMenuToggle}>
          <Menu />
        </div>
        <ul className={`flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-4 md:static absolute ${isMenuOpen ? 'flex' : 'hidden md:flex'} bg-gray-900 md:bg-transparent w-full md:w-auto left-0 md:relative top-full md:top-auto transition-all`}>
          <NavItem href="/" icon={<Home />} text="Home" onClick={handleMenuToggle} />
          <NavItem href="/features/about" icon={<User />} text="About" onClick={handleMenuToggle} />
          <NavItem href="/projects" icon={<Folder />} text="Projects" onClick={handleMenuToggle} />
          <NavItem href="/resume.pdf" icon={<FileText />} text="Resume" isExternal onClick={handleMenuToggle} />
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ href, icon, text, isExternal = false, onClick }: { href: string; icon: React.ReactNode; text: string; isExternal?: boolean, onClick?: () => void }) => (
  <li>
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined} // Abre em nova aba se for um link externo
      rel={isExternal ? "noopener noreferrer" : undefined} // Boas práticas de segurança para links externos
      className="text-gold hover:text-yellow-300 transition-colors duration-200 flex items-center"
      onClick={onClick}
    >
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  </li>
);

export default Navbar;
