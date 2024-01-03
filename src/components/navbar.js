"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/components/navbar.module.css"

export default function Navbar() {

  const navLinks = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Skills", href: "/skills" },
      { name: "Contact", href: "/contact" },
  ]

  const pathname = usePathname();

  return (
    <header className={styles.container}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link 
            href={link.href}
            key={link.name} 
            className={ isActive ? styles.activelink : styles.notactivelink }
          >
            <h2>{link.name}</h2>
          </Link>
        )
      })}
    </header>
  )
}