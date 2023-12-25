import styles from "../styles/app/home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>

      <div className="card" id={styles.contentcard}>
        <div className={styles.leftcontent}>
          <h1>Hi,</h1>
          <h1>I am Felipe Amorim</h1>
          <h1>Software Developer</h1>
        </div>
        <div className={styles.rightcontent}>

        </div>
      </div>

    </div>
  )
}