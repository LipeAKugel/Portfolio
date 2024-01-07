import styles from "../styles/components/carousel.module.css"
import Image from "next/image";

export default function Carousel({ items }) {
  return (
    <div className={styles.projects_wrapper}>
      {items.map(item => (
        <div 
          key={item.name} 
          className={styles.project_item}
          onClick={() => redirectTo(item.projecturl)}
        >
          <Image src={item.img} alt="project image"/>
          <div className={styles.project_info}>
            <h1 className={styles.project_title}>{item.name}</h1>
            <p className={styles.project_description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}