import styles from "../styles/components/button.module.css"

export default function Button({ label, onClick }) {
  return (
    <button className={styles.button} onClick={onClick}>
      <h2>{label}</h2>
    </button>
  )
}