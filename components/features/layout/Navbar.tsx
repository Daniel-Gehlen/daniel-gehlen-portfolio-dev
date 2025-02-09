"use client"; // Adicione esta linha no topo do arquivo

import Link from "next/link";
import { Home, User, Folder, FileText, Menu } from "lucide-react";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar o menu mobile

  return (
    <nav className="w-full reflection reflection-below reflection-opacity-50 text-green-400 font-digital text-4xl relative z-50">
      <div className="flex justify-center items-center px-4">
        <div className="menu-icon md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Menu />
        </div>
        <ul className={`flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-4 md:static absolute ${isMenuOpen ? 'flex' : 'hidden md:flex'} bg-gray-900 md:bg-transparent w-full md:w-auto left-0 md:relative top-full md:top-auto transition-all`}>
          <NavItem href="/" icon={<Home />} text="Home" />
          <NavItem href="/features/about" icon={<User />} text="About" />
          <NavItem href="/projects" icon={<Folder />} text="Projects" />
          <NavItem href="/resume.pdf" icon={<FileText />} text="Resume" isExternal />
        </ul>
      </div>
    </nav>
  );
};

const NavItem = ({ href, icon, text, isExternal = false }: { href: string; icon: React.ReactNode; text: string; isExternal?: boolean }) => (
  <li>
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined} // Abre em nova aba se for um link externo
      rel={isExternal ? "noopener noreferrer" : undefined} // Boas práticas de segurança para links externos
      className="text-gold hover:text-yellow-300 transition-colors duration-200 flex items-center"
    >
      {icon}
      <span className="ml-2">{text}</span>
    </Link>
  </li>
);

export default Navbar;
