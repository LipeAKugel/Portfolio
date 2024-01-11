"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs"
import styles from "../styles/components/navbar.module.css";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";


export default function Navbar() {

  const pathname = usePathname();
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme("blue");


  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const navLinks = [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Skills", href: "/skills" },
      { name: "Contact", href: "/contact" },
  ]

  return (
    <header className={styles.container}>
      <div className={styles.links}>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link 
            href={link.href}
            key={link.name} 
            className={`${styles.link}  ${isActive ? styles.activelink : styles.notactivelink}`}
          >
            <h2>{link.name}</h2>
          </Link>
        )
      })}
      </div>

      <div className={styles.theme_icon}>
        {theme && (
          theme === "dark" ? (
            <BsSun size={25} cursor="pointer" onClick={() => setTheme("light")} />
          ) : (
            <FiMoon size={25} cursor="pointer" onClick={() => setTheme("dark")} />
          )
        )}
      </div>

    </header>
  )
}