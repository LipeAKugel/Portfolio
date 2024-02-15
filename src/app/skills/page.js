import styles from "../../styles/app/skills.module.css"
import skarlet from "../../../assets/skarlet.png";
import printgo from "../../../assets/printgo.png";
import europa from "../../../assets/europa.png";
import bloquinho from "../../../assets/bloquinho.png";
import gammaPharma from "../../../assets/gammapharma.png";
import apcProject from "../../../assets/apc-project.png";
import Carousel from "@/components/carousel";

export default function Skills() {

  const projects = [
    {
      name: "PrintGo",
      url: "https://github.com/fga-eps-mds/2023.2-PrintGo-Doc",
      img: printgo,
      description: "PrintGo is a web application developed by team of 15 students from two different college courses. It is a system produced for the Civil Police of Goías with the goal of monitoring printing assets. The tool helps count and report impressions and is able to present a dashboard with printer info."
    },
    {
      name: "Bloquinho",
      url: "https://github.com/Jauzimm/Bloquinho-FrontEnd",
      img: bloquinho,
      description: "Bloquinho is a web application being built by me and a colleague using React. It's a note-taking app that allows for note writing and saving, it will include a login system and we have plans to include markdown support."
    },
    {
      name: "Europa",
      url: "https://github.com/LipeAKugel/Europa",
      img: europa,
      description: "Europa is a space-themed exploration platformer game, it's a personal project currently is very early development built with Python and the Pygame library."
    },
    {
      name: "Skarlet",
      url: "https://github.com/Feudo-Vermelho-Rosas/Skarlet",
      img: skarlet,
      description: "Skarlet is top-down rpg game developed by team of 7 students at the Universidade de Brasília. The game is set in a world with a series of islands, each representing a different level, the player controls mysterious character that seeks the power of a treasure."
    },
    {
      name: "Gammapharma",
      url: "https://github.com/LipeAKugel/Gammapharma",
      img: gammaPharma,
      description: "Gammapharma is a simple Java mini application developed as a project for a college course, it simulates a pharmacy application where you can manage the registration of products and affiliated pharmacies."
    },
    {
      name: "Algothrims Project",
      url: "https://github.com/LipeAKugel/APC-UnB/tree/main/C/Trabalho%20em%20C",
      img: apcProject,
      description: "This application was written as my first project in college, it was the final project of a course called Algoritmo e Programacao de Computadores, it's a terminal application written fully in C."
    }
  ]

  return (
    <div className={styles.container}>
      <div className="card" id={styles.contentcard}>
        <h1>Skillset</h1>  
        <div className={styles.info}>
          <div className={styles.leftcontent}>
            <ul>
              <h2>Preferred Languages:</h2>
              <li>JavaScript</li>
              <li>Python</li>
              <li>C</li>
              <li>C++</li>
            </ul>
            <ul>
              <h2>Other Languages:</h2>
              <li>Java</li>
              <li>RISC-V Assembly</li>
            </ul>
            <ul>
              <h2>Other Skills:</h2>
              <li>Communication:</li>
              Ability to have good communication orally and writing.
              <li>Learning:</li>
              Able to learn new technologies quickly and apply knowledge gained to real-world projects.
              <li>Collaboration and Autonomy:</li>
              Able to work well independently and also collaborate with teams.
            </ul>
          </div>
          <div className={styles.rightcontent}>
            <ul>
              <h2>Technologies:</h2>
              <li>Webdev:</li>
              React, NextJS, NodeJs, Typescript
              <li>Databases:</li>
              Prisma, PostgreSQL, MySQL
              <li>Source Control:</li>
              Git, Github
              <li>Gamedev:</li>
              GameMakerStudio 2, Pygame
              <li>Devops:</li>
              Bash, Docker
              <li>Operating Systems:</li>
              Windows, Linux (Ubuntu)
            </ul>
            <ul>
              <h2>Education:</h2>
              <li>(5th Semester) Bachelor&apos;s in Software Engineering at UnB</li>
            </ul>
          </div>
        </div>   
        <h1>My projects</h1>
        <div className={styles.projectsContainer}>
          <Carousel
            items={projects}
          />
        </div>
      </div>
    </div>
  )
}