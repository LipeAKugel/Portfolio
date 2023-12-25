"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../styles/components/navbar.css"

export default function Navbar() {

  const navLinks = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Skills", href: "/skills" },
      { name: "Contact", href: "/contact" },
  ]

  const pathname = usePathname();

  return (
    <header className="navbar-container">

      <div className="navbar-leftcontainer">
        <p>Hi, I am Felipe Amorim</p>
      </div>

      <div className="navbar-rightcontainer">
        {navLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link href={link.href} key={link.name} style={{ color: isActive ? 'purple' : 'black'}}>
              {link.name}
            </Link>
          )
        })}
      </div>

    </header>
  )
}