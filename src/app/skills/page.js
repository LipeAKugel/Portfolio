"use client";
import styles from "../../styles/app/skills.module.css"
import skarlet from "../../../assets/skarlet.png";
import printgo from "../../../assets/printgo.png";
import apcProject from "../../../assets/apc-project.png";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Carousel from "@/components/carousel";

export default function Skills() {

  const router = useRouter();

  const projects = [
    {
      name: "PrintGo",
      projecturl: "https://github.com/fga-eps-mds/2023.2-PrintGo-Doc",
      img: printgo,
      description: "PrintGo is a web application developed by team of 15 students from two different college courses. It is a system produced for the Civil Police of Goías with the goal of monitoring printing assets. The tool helps count and report impressions and is able to present a dashboard with printer info."
    },
    {
      name: "Skarlet",
      projecturl: "https://github.com/Feudo-Vermelho-Rosas/Skarlet",
      img: skarlet,
      description: "Skarlet is top-down rpg game developed by team of 7 students at the Universidade de Brasília. The game is set in a world with a series of islands, each representing a different level, the player controls mysterious character that seeks the power of a treasure."
    },
    {
      name: "Gammapharma",
      projecturl: "https://github.com/LipeAKugel/Gammapharma",
      description: "Gammapharma is a simple Java mini application developed as a project for a college course, it simulates a pharmacy application where you can manage the registration of products and affiliated pharmacies."
    },
    {
      name: "Algothrims Project",
      projecturl: "https://github.com/LipeAKugel/APC-UnB/tree/main/C/Trabalho%20em%20C",
      img: apcProject,
      description: "This application was written as my first project in college, it was the final project of a course called Algoritmo e Programação de Computadores, it's a terminal application written fully in C."
    }
  ]

  const redirectTo = (url) => {
    router.push(url)
  }

  return (
    <div className={styles.container}>
      <div className="card" id={styles.contentcard}>
        <h1>My projects</h1>
          <Carousel
            items={projects}
          />
        <h1>My skills</h1>
        <h2>Technical Skills:</h2>
        <ul>
          <li>
            Web Development: I have knowledge of frameworks 
            like React and NextJS and technologies like Node.js 
            Prisma, Docker and PostgreSQL. I have a good understanding 
            of HTML, CSS, and JavaScript, which are the main 
            technologies used for web development.
          </li>
          <li>
            Game Development: I have experience in developing 2D games 
            in the GameMakerStudio 2 engine and using the Pygame library.
            My first programming experiences came from making games in school.
          </li>
          <li>
            Other Programming Languages: I also have experience in Python, 
            C, C++, and Java. I have used these languages mostly for college 
            projects and problem solving. 
          </li>
        </ul>
        <h2>Additional Skills:</h2>
        <ul>
          <li>
            Ability to Work Independently and in Teams: I am able 
            to work independently and in teams, and I have experience 
            in both environments.
          </li>
          <li>
            Good Communication Skills: I have good communication skills, 
            both orally and in writing.
          </li>
          <li>
            Ability to Learn New Technologies: I am able to learn new 
            technologies quickly and apply the knowledge gained to 
            real-world projects.
          </li>
        </ul>

        <p>
          In conclusion, I am a software developer with knowledge of a variety of technologies. 
          I have experience in web development, game development, and other areas. 
          I am able to work independently and in teams, and I have good communication 
          skills. I am always willing to learn new technologies 
          and challenges.
        </p>
      </div>
    </div>
  )
}