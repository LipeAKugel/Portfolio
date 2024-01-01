"use client";
import styles from "../../styles/app/about.module.css"
import fgaImage from "../../../assets/fga.jpg";
import Image from "next/image";
import Button from "@/components/button";
import { useRouter } from "next/navigation";

export default function AboutMe() {

  const router = useRouter();

  const redirectToSkills = () => {
    router.push("/skills");
  }

  return (
    <div className={styles.container}>

      <div className="card" id={styles.contentcard}>
        <h1>About Me</h1>
        <h2>Introduction:</h2>
        <p>
          Hello, I&apos;m Felipe Amorim, I&apos;m a Software Engineering student at 
          Universidade de Brasília (FGA campus). I have participated in a 
          college projects and I have interest in fullstack web development 
          and game developing.
        </p>
        <p>
          I first started learning programming back when I was in middle school, 
          I created some games using pygame and scratch. I studied C and Python 
          in highschool and decided to follow a carrer and study Software Engineering
          in college.
        </p>
        <Image alt="fga_image" src={fgaImage} />
        <h2>Software development:</h2>
        <p>
          My passion for software development comes from the experience of always being 
          able to learn new interesting concepts and technologies, while being able to 
          solve problems and create new ideas. It&apos;s an area I really identified myself 
          with.
        </p>
        <p>
          I have experience in full-stack web development 
          through college and personal projects. I&apos;m also 
          a game development enthusiast. I&apos;m currently 
          working on personal projects, looking to learn 
          and experience new stuff and technologies.
        </p>
        <h2>Professional Goals:</h2>
        <ul>
          <li>Develop my career as a software developer.</li>
          <li>Work on challenging and rewarding projects.</li>
          <li>Use my skills to make a difference wherever I am.</li>
        </ul>

        <p>
          You can have a look at my projects and skills here:
        </p>
        <Button label="Skills" onClick={() => redirectToSkills()}/>
        <h2>Curiosities:</h2>
        <p>
          I have a childhood passion for astronomy and asthophysics, it’s still an 
          area I&apos;m open to explore in the future.
        </p>
      </div>

    </div>
  )
}