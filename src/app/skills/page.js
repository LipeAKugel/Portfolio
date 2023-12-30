import Project from "@/components/project"
import styles from "../../styles/app/skills.module.css"
import skarlet from "../../../assets/skarlet.png";
import printgo from "../../../assets/printgo.svg"

export default function Skills() {

  const projects = [
    {
      name: "PrintGo",
      projecturl: "https://github.com/fga-eps-mds/2023.2-PrintGo-Doc",
      imgurl: printgo,
      description: "PrintGo is a web application developed by team of 15 students from two different college courses. It is a system produced for the Civil Police of Goías with the goal of monitoring printing assets. The tool helps count and report impressions and is able to present a dashboard with printer info. I was one of the lead developers of the project during the it's first semester, it was the first serious application I developed with a real client."
    },
    {
      name: "Skarlet",
      projecturl: "https://github.com/Feudo-Vermelho-Rosas/Skarlet",
      imgurl: skarlet,
      description: "Skarlet is top-down rpg game developed by team of 7 students at the Universidade de Brasília. The game is set in a world with a series of islands, each representing a different level, the player controls mysterious character that seeks the power of a treasure. The game was developed as part of a third-semester software development course, and I was one of the lead developers during the entirety of the project."
    },
  ]

  return (
    <div className={styles.container}>
      <div className="card" id={styles.contentcard}>
        <h1>My projects</h1>
        {projects.map(project => {
          return (
            <Project
              key={project.name}
              name={project.name}
              projecturl={project.projecturl}
              imgurl={project.imgurl}
              description={project.description}
            />
          )
        })}
      </div>
    </div>
  )
}