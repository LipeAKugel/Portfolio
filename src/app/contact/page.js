"use client";
import styles from "../../styles/app/contact.module.css";
import gmailLogo from "../../../assets/gmailLogo.svg";
import instagramLogo from "../../../assets/instagramLogo.svg";
import githubLogo from "../../../assets/githubLogo.svg";
import linkedInLogo from "../../../assets/linkedInLogo.svg";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/contactForm";
import MessageModal from "@/components/messageModal";
import { useState } from "react";

export default function Contact() {

  const socials = [
    {
      img: githubLogo,
      name: "LipeAKugel",
      url: "https://github.com/LipeAKugel"
    },
    {
      img: linkedInLogo,
      name: "Felipe Amorim",
      url: "https://www.linkedin.com/in/felipe-amorim-b92144a6"
    },
    {
      img: instagramLogo,
      name: "lipe.a_araujo",
      url: "https://www.instagram.com/lipe.a_araujo/"
    },
    {
      img: gmailLogo,
      name: "felipearaujodff@gmail.com",
      url: ""
    },
  ]

  const [modalOpen, setModalOpen] = useState(false);

  const copyEmailToClipboard = async () => {
    navigator.clipboard.writeText("felipearaujodff@gmail.com");
    setModalOpen(true);
    setTimeout(() => {
      setModalOpen(false)
    }, 3000)
  }

  return (
    <div className={styles.container}>
      <div className={styles.clipboardModal}>
        <MessageModal
          open={modalOpen}
          text="Copied to clipboard"
        />
      </div>
      <div className="card" id={styles.content_card}>
        <h1>Contact</h1>
        <div className={styles.content}>
          <div className={styles.emailContact}>
            <ContactForm/>
          </div>
          <div className={styles.socials}>
            {socials.map(social => (
              social.name === "felipearaujodff@gmail.com" ? (
                <Link
                  href={social.url}
                  onClick={copyEmailToClipboard}
                  key={social.url}
                  className={styles.social}
                >
                  <Image src={social.img} alt=""/>
                  {social.name}
                </Link>
              ) : (
                <Link 
                  href={social.url} 
                  key={social.url}
                  className={styles.social}
                >
                  <Image src={social.img} alt=""/>
                  {social.name}
                </Link>
              )
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}