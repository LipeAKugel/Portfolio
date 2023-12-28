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
        <p>
          Hello, I’m Felipe Amorim, I’m a Software Engineering student at 
          Universidade de Brasília (FGA campus). I have participated in a 
          few college projects and I have interest in fullstack web development 
          and game developing.
        </p>
        <p>
          I first started learning programming back when I was in middle school, 
          I created some games using pygame and scratch. I studied C and Python 
          in highschool and decided to study Software Engineering in college.
        </p>
        <Image alt="fga_image" src={fgaImage} />
        <h1>Experience</h1>
        <p>
          I have experience in full-stack development 
          through college and personal projects. I’m also 
          a game development enthusiast. Currently 
          working on personal projects, looking to learn 
          and experience new stuff and technologies.
        </p>
        <p>
          You can have a look at my projects and skills here:
        </p>
        <Button label="Skills" onClick={() => redirectToSkills()}/>
        <h1>More</h1>
        <p>
          My passion for software development comes from the experience of always being 
          able to learn new interesting concepts and technologies, while being able to 
          solve problems and create new ideas. 
        </p>
        <p>
          I also have a childhood passion for astronomy and asthophysics, it’s still an 
          area I’m open to explore in the future.
        </p>
      </div>

    </div>
  )
}