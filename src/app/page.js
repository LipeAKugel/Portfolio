"use client";
import Button from "@/components/button"
import styles from "../styles/app/home.module.css"
import { useRouter } from "next/navigation";
import profilePic from "../../assets/profile.png";
import Image from "next/image";

export default function Home() {

  const router = useRouter();

  const redirectToAbout = () => {
    router.push("/about");
  }

  return (
    <div className={styles.container}>

      <div className="card" id={styles.contentcard}>
        <div className={styles.leftcontent}>
          <h1>Hi,</h1>
          <h1>I am <span>Felipe Amorim</span></h1>
          <h1>Software Developer</h1>
          <Button label="About Me >>" onClick={() => redirectToAbout()}/>
        </div>
        <div className={styles.rightcontent}>
          <Image
            alt="profilePic" 
            src={profilePic}
            onClick={() => redirectToAbout()}
          />
        </div>
      </div>

    </div>
  )
}