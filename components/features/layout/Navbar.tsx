import Link from "next/link";
// @ts-ignore
import { Home, User, Folder, FileText } from "lucide-react";
import type React from "react"; // Added import for React

const Navbar = () => {
  return (
    <nav className="bg-black bg-opacity-70 p-4">
      <ul className="flex justify-center space-x-6">
        <NavItem href="/" icon={<Home />} text="Home" />
        <NavItem href="/features/about" icon={<User />} text="About" />
        <NavItem href="/projects" icon={<Folder />} text="Projects" />
        <NavItem href="/resume.pdf" icon={<FileText />} text="Resume" isExternal />
      </ul>
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