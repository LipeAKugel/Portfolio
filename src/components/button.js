import styles from "../styles/components/button.module.css"

export default function Button({ label, type, onClick }) {
  return (
    <button 
      className={styles.button}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  )
}