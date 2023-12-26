"use client";
import Button from "@/components/button"
import styles from "../styles/app/home.module.css"
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const redirectToContact = () => {
    router.push("/contact");
  }

  return (
    <div className={styles.container}>

      <div className="card" id={styles.contentcard}>
        <div className={styles.leftcontent}>
          <h1>Hi,</h1>
          <h1>I am Felipe Amorim</h1>
          <h1>Software Developer</h1>
          <Button label="Contact" onClick={() => redirectToContact()}/>
        </div>
        <div className={styles.rightcontent}>

        </div>
      </div>

    </div>
  )
}