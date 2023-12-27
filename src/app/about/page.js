import styles from "../../styles/app/about.module.css"

export default function AboutMe() {
  return (
    <div className={styles.container}>

      <div className="card" id={styles.contentcard}>
        <h1>About Me</h1>
        <p>
          Hello, I’m a Software Engineering student at 
          Universidade de Brasília (FGA campus). I’m 
          currently in my 5th semestrer and trying to 
          participate in new projects and learn new 
          technologies. My passion for software comes 
          from the experience of always leaning 
          something new, I take care of the architecture 
          and code quality of everything I build.
        </p>
        <h1>Experience</h1>
        <p>
          I have experience in full-stack development 
          through college and personal projects. I’m also 
          a game development enthusiast. Currently 
          working on personal projects, looking to learn 
          and experience new stuff and technologies.
        </p>
      </div>

    </div>
  )
}